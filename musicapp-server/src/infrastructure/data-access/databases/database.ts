import { DataSource } from 'typeorm';
import { ArtistGroupEntity } from "../entities/artist-group.entity.ts";
import { ArtistGroupMembershipEntity } from "../entities/artist-group-membership.entity.ts";
import { ArtistEntity } from "../entities/artist.entity.ts";
import { GenreHierarchyEntity } from "../entities/genre-hierarchy.entity.ts";
import { GenreEntity } from "../entities/genre.entity.ts";
import { ProducerGroupMembershipEntity } from "../entities/producer-group-membership.entity.ts";
import { ProducerGroupEntity } from "../entities/producer-group.entity.ts";
import { ProducerEntity } from "../entities/producer.entity.ts";
import { ProjectTypeEntity } from "../entities/project-type.entity.ts";
import { ProjectEntity } from "../entities/project.entity.ts";
import { SceneEntity } from "../entities/scene.entity.ts";
import { SongEntity } from "../entities/song.entity.ts";
import { StreamingServiceEntity } from "../entities/streaming-service.entity.ts";
import { UserLoginEntity } from "../entities/user-login.entity.ts";

export const Database = new DataSource({
  type: 'postgres',
  host: Deno.env.get('DB_HOST'),
  port: parseInt(Deno.env.get('DB_PORT')!),
  username: Deno.env.get('DB_USER'),
  password: Deno.env.get('DB_PASSWORD'),
  database: Deno.env.get('DB_NAME'),
  synchronize: false,
  logging: true,
  entities: [
    ArtistEntity,
    ArtistGroupEntity,
    ArtistGroupMembershipEntity,
    GenreEntity,
    GenreHierarchyEntity,
    ProducerEntity,
    ProducerGroupEntity,
    ProducerGroupMembershipEntity,
    ProjectTypeEntity,
    ProjectEntity,
    SceneEntity,
    SongEntity,
    StreamingServiceEntity,
    UserLoginEntity
  ],
  ssl: {
    rejectUnauthorized: false
  }
});