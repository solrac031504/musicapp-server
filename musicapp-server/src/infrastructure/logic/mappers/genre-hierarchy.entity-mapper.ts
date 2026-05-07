import { GenreHierarchyModel } from "../../../domain/models/genre-hierarchy.model.ts";
import { EntityMapper } from "../../common/mappers/entity-mapper.ts";
import { GenreHierarchyEntity } from "../../data-access/entities/genre-hierarchy.entity.ts";

export class GenreHierarchyEntityMapper
    extends EntityMapper<GenreHierarchyModel, GenreHierarchyEntity> {
    public override toModel(entity: GenreHierarchyEntity): GenreHierarchyModel {
        return {
            id: entity.genreHierarchyId,
            genreId: entity.genreId,
            parentGenreId: entity.parentGenreId,
        } as GenreHierarchyModel;
    }

    public override fromModel(
        model: GenreHierarchyModel,
    ): GenreHierarchyEntity {
        return {
            genreHierarchyId: model.id,
            genreId: model.genreId,
            parentGenreId: model.parentGenreId,
        } as GenreHierarchyEntity;
    }
}
