# musicapp-server

Backend API server for the music app. Built with Deno 2, Hono, TypeORM, and
PostgreSQL.

## Stack

| Layer     | Technology          |
| --------- | ------------------- |
| Runtime   | Deno 2              |
| Framework | Hono                |
| Database  | PostgreSQL          |
| ORM       | TypeORM             |
| Language  | TypeScript (strict) |

## Requirements

- [Deno 2](https://deno.com) — no Node.js or npm required
- A running PostgreSQL instance
- The database schema already applied (see [Database](#database))

## Getting started

### 1. Clone and navigate

```sh
git clone <repo-url>
cd musicapp-server
```

### 2. Configure environment variables

Create a `.env` file in the `musicapp-server/` directory:

```sh
# Server
PORT=3000
ENV=development  # set to "production" to disable CORS headers

# Database
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=your_database

# CORS (development only — semicolon-separated list of allowed origins)
CORS_ORIGINS=http://localhost:3000;http://localhost:5173
```

### 3. Install dependencies

```sh
cd musicapp-server
deno install
```

### 4. Run the server

```sh
# Development (watch mode — restarts on file changes)
deno task dev

# Production
deno task start
```

The server starts on the port defined in `PORT` (default `3000`). A health check
is available at `GET /`.

## Project structure

```
musicapp-server/
└── src/
    ├── server.ts                        # Entry point — app setup, routing, error handler
    ├── api/
    │   ├── controllers/                 # HTTP-layer classes; delegate to services
    │   ├── middleware/
    │   │   └── cors.middleware.ts       # Environment-aware CORS config
    │   └── routes/                      # Hono route definitions; one file per entity
    ├── application/
    │   ├── common/                      # Base classes: services, DTOs, mappers, requests, responses
    │   ├── dto/                         # Per-entity DTO definitions
    │   └── logic/
    │       ├── mappers/                 # Request and response mappers
    │       └── services/                # One service class per operation (add/delete/get/list/update)
    ├── domain/
    │   ├── common/                      # Base model and repository interfaces
    │   └── models/                      # Pure domain model classes
    └── infrastructure/
        ├── bootstrap/                   # Per-domain factory functions; wires repo → services → controller
        ├── common/                      # Base entity, repository, mapper, procedure abstractions
        ├── data-access/
        │   ├── databases/database.ts    # TypeORM DataSource configuration
        │   ├── entities/                # TypeORM entity classes
        │   ├── parameters/              # Stored procedure parameter types
        │   ├── procedures/              # Stored procedure wrappers (login)
        │   └── repositories/            # Concrete repository implementations
        └── logic/
            └── mappers/                 # Entity ↔ domain model mappers
```

## Architecture

The codebase follows a four-layer architecture where each layer only depends on
the layer below it.

```
Request → API layer → Application layer → Infrastructure layer → Database
```

**API layer** (`src/api/`) — handles HTTP concerns only. Routes parse the
incoming request and call the appropriate controller method. Controllers
delegate immediately to a service and return the result. No business logic lives
here.

**Application layer** (`src/application/`) — contains all business logic. Each
operation has its own service class (e.g. `AddArtistService`,
`GetArtistService`). Services are kept small and focused — one public
`execute()` method each. DTOs and mappers translate between the request/response
shapes and domain models.

**Domain layer** (`src/domain/`) — plain TypeScript classes representing the
core data models and repository contracts. No framework dependencies.

**Infrastructure layer** (`src/infrastructure/`) — implements the domain
repository interfaces using TypeORM. Entity classes map database tables to
TypeScript objects. Entity mappers convert between entities and domain models.
Bootstrap modules wire the full dependency graph for each domain.

### Adding a new entity

1. Create a TypeORM entity in `src/infrastructure/data-access/entities/`
2. Register it in `src/infrastructure/data-access/databases/database.ts`
3. Create a domain model in `src/domain/models/`
4. Create a repository in `src/infrastructure/data-access/repositories/`
5. Create an entity mapper in `src/infrastructure/logic/mappers/`
6. Create service classes (add/delete/get/list/update) under
   `src/application/logic/services/<entity>/`
7. Create a controller in `src/api/controllers/`
8. Create a route module in `src/api/routes/`
9. Add a bootstrap file in `src/infrastructure/bootstrap/` and export it from
   `src/infrastructure/bootstrap/index.ts`
10. Register the route in `src/server.ts`

## API endpoints

All endpoints return JSON

### Health

| Method | Path | Description  |
| ------ | ---- | ------------ |
| `GET`  | `/`  | Health check |

### Login

| Method | Path     | Description         |
| ------ | -------- | ------------------- |
| `POST` | `/login` | Authenticate a user |

### Artists

| Method   | Path           | Description         |
| -------- | -------------- | ------------------- |
| `GET`    | `/artists`     | List all artists    |
| `GET`    | `/artists/:id` | Get a single artist |
| `POST`   | `/artists`     | Create an artist    |
| `PATCH`  | `/artists/:id` | Update an artist    |
| `DELETE` | `/artists/:id` | Delete an artist    |

### Artist groups

| Method   | Path                 | Description               |
| -------- | -------------------- | ------------------------- |
| `GET`    | `/artist-groups`     | List all artist groups    |
| `GET`    | `/artist-groups/:id` | Get a single artist group |
| `POST`   | `/artist-groups`     | Create an artist group    |
| `PATCH`  | `/artist-groups/:id` | Update an artist group    |
| `DELETE` | `/artist-groups/:id` | Delete an artist group    |

### Artist group memberships

| Method   | Path                            | Description             |
| -------- | ------------------------------- | ----------------------- |
| `GET`    | `/artist-group-memberships`     | List all memberships    |
| `GET`    | `/artist-group-memberships/:id` | Get a single membership |
| `POST`   | `/artist-group-memberships`     | Create a membership     |
| `PATCH`  | `/artist-group-memberships/:id` | Update a membership     |
| `DELETE` | `/artist-group-memberships/:id` | Delete a membership     |

### Genres

| Method   | Path          | Description        |
| -------- | ------------- | ------------------ |
| `GET`    | `/genres`     | List all genres    |
| `GET`    | `/genres/:id` | Get a single genre |
| `POST`   | `/genres`     | Create a genre     |
| `PATCH`  | `/genres/:id` | Update a genre     |
| `DELETE` | `/genres/:id` | Delete a genre     |

### Genre hierarchies

| Method   | Path                     | Description                  |
| -------- | ------------------------ | ---------------------------- |
| `GET`    | `/genre-hierarchies`     | List all genre hierarchies   |
| `GET`    | `/genre-hierarchies/:id` | Get a single genre hierarchy |
| `POST`   | `/genre-hierarchies`     | Create a genre hierarchy     |
| `PATCH`  | `/genre-hierarchies/:id` | Update a genre hierarchy     |
| `DELETE` | `/genre-hierarchies/:id` | Delete a genre hierarchy     |

### Producers

| Method   | Path             | Description           |
| -------- | ---------------- | --------------------- |
| `GET`    | `/producers`     | List all producers    |
| `GET`    | `/producers/:id` | Get a single producer |
| `POST`   | `/producers`     | Create a producer     |
| `PATCH`  | `/producers/:id` | Update a producer     |
| `DELETE` | `/producers/:id` | Delete a producer     |

### Producer groups

| Method   | Path                   | Description                 |
| -------- | ---------------------- | --------------------------- |
| `GET`    | `/producer-groups`     | List all producer groups    |
| `GET`    | `/producer-groups/:id` | Get a single producer group |
| `POST`   | `/producer-groups`     | Create a producer group     |
| `PATCH`  | `/producer-groups/:id` | Update a producer group     |
| `DELETE` | `/producer-groups/:id` | Delete a producer group     |

### Producer group memberships

| Method   | Path                              | Description             |
| -------- | --------------------------------- | ----------------------- |
| `GET`    | `/producer-group-memberships`     | List all memberships    |
| `GET`    | `/producer-group-memberships/:id` | Get a single membership |
| `POST`   | `/producer-group-memberships`     | Create a membership     |
| `PATCH`  | `/producer-group-memberships/:id` | Update a membership     |
| `DELETE` | `/producer-group-memberships/:id` | Delete a membership     |

### Projects

| Method   | Path            | Description          |
| -------- | --------------- | -------------------- |
| `GET`    | `/projects`     | List all projects    |
| `GET`    | `/projects/:id` | Get a single project |
| `POST`   | `/projects`     | Create a project     |
| `PATCH`  | `/projects/:id` | Update a project     |
| `DELETE` | `/projects/:id` | Delete a project     |

### Project types

| Method   | Path                 | Description               |
| -------- | -------------------- | ------------------------- |
| `GET`    | `/project-types`     | List all project types    |
| `GET`    | `/project-types/:id` | Get a single project type |
| `POST`   | `/project-types`     | Create a project type     |
| `PATCH`  | `/project-types/:id` | Update a project type     |
| `DELETE` | `/project-types/:id` | Delete a project type     |

### Scenes

| Method   | Path          | Description        |
| -------- | ------------- | ------------------ |
| `GET`    | `/scenes`     | List all scenes    |
| `GET`    | `/scenes/:id` | Get a single scene |
| `POST`   | `/scenes`     | Create a scene     |
| `PATCH`  | `/scenes/:id` | Update a scene     |
| `DELETE` | `/scenes/:id` | Delete a scene     |

### Songs

| Method   | Path         | Description       |
| -------- | ------------ | ----------------- |
| `GET`    | `/songs`     | List all songs    |
| `GET`    | `/songs/:id` | Get a single song |
| `POST`   | `/songs`     | Create a song     |
| `PATCH`  | `/songs/:id` | Update a song     |
| `DELETE` | `/songs/:id` | Delete a song     |

### Streaming services

| Method   | Path                      | Description                    |
| -------- | ------------------------- | ------------------------------ |
| `GET`    | `/streaming-services`     | List all streaming services    |
| `GET`    | `/streaming-services/:id` | Get a single streaming service |
| `POST`   | `/streaming-services`     | Create a streaming service     |
| `PATCH`  | `/streaming-services/:id` | Update a streaming service     |
| `DELETE` | `/streaming-services/:id` | Delete a streaming service     |

## Database

The server connects to PostgreSQL via TypeORM with `synchronize: false` — the
database schema is managed externally and must be set up before the server
starts.

Connection is configured through environment variables (see
[Getting started](#getting-started)). SSL is enabled with
`rejectUnauthorized: false` to support cloud-hosted databases.

The `login` endpoint calls a PostgreSQL stored procedure (`login_user`) directly
rather than going through the ORM. This procedure must exist in the database.

## CORS

CORS is handled by `src/api/middleware/cors.middleware.ts`. In production
(`ENV=production`), the middleware is a no-op — the server is assumed to be
deployed on the same domain as the frontend so no CORS headers are needed. In
all other environments, allowed origins are read from the `CORS_ORIGINS`
environment variable as a semicolon-separated list.

## CI

GitHub Actions runs on every push and on pull requests targeting `main`. The
pipeline installs Deno dependencies and runs a type check via `deno check`. No
test suite is currently configured.

(this file was generated)
