import { ArtistGroupMembershipEntity } from "@infrastructure/data-access/entities/artist-group-membership.entity.ts";
import { ArtistGroupEntity } from "@infrastructure/data-access/entities/artist-group.entity.ts";
import { ArtistEntity } from "@infrastructure/data-access/entities/artist.entity.ts";
import { GenreHierarchyViewEntity } from "@infrastructure/data-access/entities/genre-hierarchy-view.entity.ts";
import { GenreHierarchyEntity } from "@infrastructure/data-access/entities/genre-hierarchy.entity.ts";
import { GenreEntity } from "@infrastructure/data-access/entities/genre.entity.ts";
import { ProducerGroupMembershipEntity } from "@infrastructure/data-access/entities/producer-group-membership.entity.ts";
import { ProducerGroupEntity } from "@infrastructure/data-access/entities/producer-group.entity.ts";
import { ProducerEntity } from "@infrastructure/data-access/entities/producer.entity.ts";
import { ProjectTypeEntity } from "@infrastructure/data-access/entities/project-type.entity.ts";
import { ProjectEntity } from "@infrastructure/data-access/entities/project.entity.ts";
import { SceneEntity } from "@infrastructure/data-access/entities/scene.entity.ts";
import { SongEntity } from "@infrastructure/data-access/entities/song.entity.ts";
import { StreamingServiceEntity } from "@infrastructure/data-access/entities/streaming-service.entity.ts";
import { DataSource } from "typeorm";

export const dataSource = new DataSource({
	type: "postgres",
	host: Deno.env.get("DB_HOST"),
	port: parseInt(Deno.env.get("DB_PORT")!),
	username: Deno.env.get("DB_USER"),
	password: Deno.env.get("DB_PASSWORD"),
	database: Deno.env.get("DB_NAME"),
	synchronize: false,
	logging: true,
	entities: [
		ArtistEntity,
		ArtistGroupEntity,
		ArtistGroupMembershipEntity,
		GenreEntity,
		GenreHierarchyEntity,
		GenreHierarchyViewEntity,
		ProducerEntity,
		ProducerGroupEntity,
		ProducerGroupMembershipEntity,
		ProjectTypeEntity,
		ProjectEntity,
		SceneEntity,
		SongEntity,
		StreamingServiceEntity,
	],
	ssl: {
		rejectUnauthorized: false,
	},
});
