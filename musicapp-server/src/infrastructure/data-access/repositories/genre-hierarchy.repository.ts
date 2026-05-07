import { DataSource } from "typeorm";
import { GenreHierarchyModel } from "../../../domain/models/genre-hierarchy.model.ts";
import { Repository } from "../../common/data-access/repositories/repository.ts";
import { GenreHierarchyEntityMapper } from "../../logic/mappers/genre-hierarchy.entity-mapper.ts";
import { GenreHierarchyEntity } from "../entities/genre-hierarchy.entity.ts";

export class GenreHierarchyRepository extends Repository<GenreHierarchyModel, GenreHierarchyEntity, GenreHierarchyEntityMapper, DataSource> {
    constructor(dataSource: DataSource) {
        super(dataSource, GenreHierarchyEntity, new GenreHierarchyEntityMapper);
    }

    protected override async findOneById(id: number): Promise<GenreHierarchyEntity | null> {
        return await this.repo.findOneBy({ genreHierarchyId: id });
    }
}