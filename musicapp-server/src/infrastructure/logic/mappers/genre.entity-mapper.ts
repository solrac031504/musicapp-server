import { GenreModel } from "../../../domain/models/genre.model.ts";
import { EntityMapper } from "../../common/mappers/entity-mapper.ts";
import { GenreEntity } from "../../data-access/entities/genre.entity.ts";

export class GenreEntityMapper extends EntityMapper<GenreModel, GenreEntity> {
    public override toModel(entity: GenreEntity): GenreModel {
        return {
            id: entity.genreId,
            genreName: entity.genreName,
            description: entity.description
        } as GenreModel
    }

    public override fromModel(model: GenreModel): GenreEntity {
        return {
            genreId: model.id,
            genreName: model.genreName,
            description: model.description
        } as GenreEntity
    }
}