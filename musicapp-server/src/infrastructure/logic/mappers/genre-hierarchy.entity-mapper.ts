import { GenreHierarchyModel } from "../../../domain/models/genre-hierarchy.model.ts";
import { EntityMapper } from "../../common/mappers/entity-mapper.ts";
import { GenreHierarchyEntity } from "../../data-access/entities/genre-hierarchy.entity.ts";

export class GenreHierarchyEntityMapper extends EntityMapper<GenreHierarchyModel, GenreHierarchyEntity> {
    public override toModel(entity: GenreHierarchyEntity): GenreHierarchyModel {
        return {
            groupId: entity.parentGenreId,
            memberId: entity.genreId
        } as GenreHierarchyModel
    }

    public override fromModel(model: GenreHierarchyModel): GenreHierarchyEntity {
        return {
            parentGenreId: model.groupId,
            genreId: model.memberId
        } as GenreHierarchyEntity
    }
}