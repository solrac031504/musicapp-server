import { ArtistModel } from "../../../domain/models/artist.model.ts";
import { EntityMapper } from "../../common/mappers/entity-mapper.ts";
import { ArtistEntity } from "../../data-access/entities/artist.entity.ts";

export class ArtistEntityMapper extends EntityMapper<ArtistModel, ArtistEntity> {
    
}