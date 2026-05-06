import { DataSource } from "typeorm";
import { ArtistModel } from "../../../domain/models/artist.model.ts";
import { Repository } from "../../common/data-access/repositories/repository.ts";
import { ArtistEntity } from "../entities/artist.entity.ts";
import { ArtistEntityMapper } from "../../logic/mappers/artist.entity-mapper.ts";

export class ArtistRepository extends Repository<ArtistModel, ArtistEntity, DataSource> {
    constructor(dataSource: DataSource) {
        super(dataSource, ArtistEntity);
    }

    public override async findOneById(id: number): Promise<ArtistEntity | null> {
        return await this.repo.findOneBy({ artistId: id });
    }

    public override toModel(entity: ArtistEntity): ArtistModel {
        return ArtistEntityMapper.toModel(entity);
    }

    public override fromModel(model: ArtistModel): ArtistEntity {
        return ArtistEntityMapper.fromModel(model);
    }
}