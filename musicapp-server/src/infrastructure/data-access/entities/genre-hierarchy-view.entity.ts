import { Column, ViewEntity } from "typeorm";
import { BaseEntity } from "../../common/data-access/entities/base-entity.ts";

@ViewEntity({
	name: "vw_genre_hierarchy",
	synchronize: false,
})
export class GenreHierarchyViewEntity extends BaseEntity {
	@Column({
		name: "genre_id",
		type: "int",
	})
	genreId!: number;

	@Column({
		name: "genre_name",
		type: "varchar",
		length: 255,
	})
	genreName!: string;

	@Column({
		name: "hierarchy_path",
		type: "text",
	})
	hierarchyPath!: string;

	@Column({
		name: "parent_genre_id",
		type: "int",
	})
	parentGenreId!: number;

	@Column({
		name: "level",
		type: "int",
	})
	level!: number;

	@Column({
		name: "root_genre",
		type: "varchar",
		length: 255,
	})
	rootGenreName!: string;

	@Column({
		name: "root_genre_id",
		type: "int",
	})
	rootGenreId!: number;
}
