import { DataSource } from "typeorm";
import { SceneModel } from "../../../domain/models/scene.model.ts";
import { Repository } from "../../common/data-access/repositories/repository.ts";
import { SceneEntityMapper } from "../../logic/mappers/scene.entity-mapper.ts";
import { SceneEntity } from "../entities/scene.entity.ts";

export class SceneRepository
    extends Repository<SceneModel, SceneEntity, SceneEntityMapper, DataSource> {
    constructor(dataSource: DataSource) {
        super(dataSource, SceneEntity, new SceneEntityMapper());
    }

    protected override async findOneById(
        id: number,
    ): Promise<SceneEntity | null> {
        return await this.repo.findOneBy({ sceneId: id });
    }
}
