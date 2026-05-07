import { ArtistGroupModel } from "../../../domain/models/artist-group.model.ts";
import { Repository } from "../../common/data-access/repositories/repository.ts";
import { ArtistGroupEntityMapper } from "../../logic/mappers/artist-group.entity-mapper.ts";
import { ArtistGroupEntity } from "../entities/artist-group.entity.ts";
import { DataSource } from "typeorm";

export class ArtistGroupRepository extends Repository<ArtistGroupModel, ArtistGroupEntity, ArtistGroupEntityMapper, DataSource> {
    constructor(dataSource: DataSource) {
        super(dataSource, ArtistGroupEntity, new ArtistGroupEntityMapper);
    }

    protected override async findOneById(id: number): Promise<ArtistGroupEntity | null> {
        return await this.repo.findOneBy({ artistGroupId: id });
    }
}