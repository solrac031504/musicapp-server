import { DataSource } from "typeorm";
import { GenreModel } from "../../../domain/models/genre.model.ts";
import { Repository } from "../../common/data-access/repositories/repository.ts";
import { GenreEntityMapper } from "../../logic/mappers/genre.entity-mapper.ts";
import { GenreEntity } from "../entities/genre.entity.ts";

export class GenreRepository
    extends Repository<GenreModel, GenreEntity, GenreEntityMapper, DataSource> {
    constructor(dataSource: DataSource) {
        super(dataSource, GenreEntity, new GenreEntityMapper());
    }

    protected override async findOneById(
        id: number,
    ): Promise<GenreEntity | null> {
        return await this.repo.findOneBy({ genreId: id });
    }
}
