import { GenreHierarchyViewModel } from "../../../domain/models/genre-hierarchy-view.model.ts";
import { EntityMapper } from "../../common/mappers/entity-mapper.ts";
import { GenreHierarchyViewEntity } from "../../data-access/entities/genre-hierarchy-view.entity.ts";

export class GenreHierarchyViewEntityMapper extends EntityMapper<GenreHierarchyViewModel, GenreHierarchyViewEntity> {
	override toModel(entity: GenreHierarchyViewEntity): GenreHierarchyViewModel {
		return {
			genreId: entity.genreId,
			genreName: entity.genreName,
			hierarchyPath: entity.hierarchyPath,
			parentGenreId: entity.parentGenreId,
			level: entity.level,
			rootGenreName: entity.rootGenreName,
			rootGenreId: entity.rootGenreId,
		} as GenreHierarchyViewModel;
	}
	override fromModel(model: GenreHierarchyViewModel): GenreHierarchyViewEntity {
		return {
			genreId: model.genreId,
			genreName: model.genreName,
			hierarchyPath: model.hierarchyPath,
			parentGenreId: model.parentGenreId,
			level: model.level,
			rootGenreName: model.rootGenreName,
			rootGenreId: model.rootGenreId,
		} as GenreHierarchyViewEntity;
	}
}
