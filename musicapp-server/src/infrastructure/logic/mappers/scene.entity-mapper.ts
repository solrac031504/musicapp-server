import { SceneModel } from "../../../domain/models/scene.model.ts";
import { EntityMapper } from "../../common/mappers/entity-mapper.ts";
import { SceneEntity } from "../../data-access/entities/scene.entity.ts";

export class SceneEntityMapper extends EntityMapper<SceneModel, SceneEntity> {
    public override toModel(entity: SceneEntity): SceneModel {
        return {
            id: entity.sceneId,
            sceneName: entity.sceneName,
            description: entity.description,
            isGeographic: entity.isGeographic,
        } as SceneModel;
    }

    public override fromModel(model: SceneModel): SceneEntity {
        return {
            sceneId: model.id,
            sceneName: model.sceneName,
            description: model.description,
            isGeographic: model.isGeographic,
        } as SceneEntity;
    }
}
