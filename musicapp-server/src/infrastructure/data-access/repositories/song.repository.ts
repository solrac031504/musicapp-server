import { DataSource } from "typeorm";
import { SongModel } from "../../../domain/models/song.model.ts";
import { Repository } from "../../common/data-access/repositories/repository.ts";
import { SongEntityMapper } from "../../logic/mappers/song.entity-mapper.ts";
import { SongEntity } from "../entities/song.entity.ts";

export class SongRepository extends Repository<SongModel, SongEntity, SongEntityMapper, DataSource> {
    constructor(dataSource: DataSource) {
        super(dataSource, SongEntity, new SongEntityMapper);
    }

    protected override async findOneById(id: number): Promise<SongEntity | null> {
        return await this.repo.findOneBy({ songId: id });
    }
}