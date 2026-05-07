import { DataSource } from "typeorm";
import { ProjectModel } from "../../../domain/models/project.model.ts";
import { Repository } from "../../common/data-access/repositories/repository.ts";
import { ProjectEntityMapper } from "../../logic/mappers/project.entity-mapper.ts";
import { ProjectEntity } from "../entities/project.entity.ts";

export class ProjectRepository extends Repository<ProjectModel, ProjectEntity, ProjectEntityMapper, DataSource> {
    constructor(dataSource: DataSource) {
        super(dataSource, ProjectEntity, new ProjectEntityMapper);
    }

    protected override async findOneById(id: number): Promise<ProjectEntity | null> {
        return await this.repo.findOneBy({ projectId: id });
    }
}