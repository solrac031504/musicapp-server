import { DataSource } from "typeorm";
import { ArtistModel } from "../../../domain/models/artist.model.ts";
import { Repository } from "../../common/data-access/repositories/repository.ts";
import { ArtistEntity } from "../entities/artist.entity.ts";
import { ArtistEntityMapper } from "../../logic/mappers/artist.entity-mapper.ts";

export class ArtistRepository extends Repository<ArtistModel, ArtistEntity, DataSource> {
    protected mapper: ArtistEntityMapper;
    
    constructor(dataSource: DataSource) {
        super(dataSource, ArtistEntity);
        
        this.mapper = new ArtistEntityMapper;
    }

    public override async findOneById(id: number): Promise<ArtistEntity | null> {
        return await this.repo.findOneBy({ artistId: id });
    }

    public override toModel(entity: ArtistEntity): ArtistModel {
        return this.mapper.toModel(entity);
    }

    public override fromModel(model: ArtistModel): ArtistEntity {
        return this.mapper.fromModel(model);
    }
}