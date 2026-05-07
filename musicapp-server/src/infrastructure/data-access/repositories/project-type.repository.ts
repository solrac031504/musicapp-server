import { DataSource } from "typeorm";
import { ProjectTypeModel } from "../../../domain/models/project-type.model.ts";
import { Repository } from "../../common/data-access/repositories/repository.ts";
import { ProjectTypeEntityMapper } from "../../logic/mappers/project-type.entity-mapper.ts";
import { ProjectTypeEntity } from "../entities/project-type.entity.ts";

export class ProjectTypeRepository
    extends Repository<
        ProjectTypeModel,
        ProjectTypeEntity,
        ProjectTypeEntityMapper,
        DataSource
    > {
    constructor(dataSource: DataSource) {
        super(dataSource, ProjectTypeEntity, new ProjectTypeEntityMapper());
    }

    protected override async findOneById(
        id: number,
    ): Promise<ProjectTypeEntity | null> {
        return await this.repo.findOneBy({ projectTypeId: id });
    }
}
