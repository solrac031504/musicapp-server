import { ArtistModel } from "../../../domain/models/artist.model.ts";
import { EntityMapper } from "../../common/mappers/entity-mapper.ts";
import { ArtistEntity } from "../../data-access/entities/artist.entity.ts";

export class ArtistEntityMapper
    extends EntityMapper<ArtistModel, ArtistEntity> {
    public override toModel(entity: ArtistEntity): ArtistModel {
        return {
            id: entity.artistId,
            artistName: entity.artistName,
            isActive: entity.isActive,
        } as ArtistModel;
    }

    public override fromModel(model: ArtistModel): ArtistEntity {
        return {
            artistId: model.id,
            artistName: model.artistName,
            isActive: model.isActive,
        } as ArtistEntity;
    }
}
