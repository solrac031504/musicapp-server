import { SceneModel } from "../../../../domain/models/scene.model.ts";
import { BaseRequestMapper } from "../../../common/mappers/base-request-mapper.ts";
import { UpdateSceneRequest } from "../../services/scene/update/update-scene.request.ts";

export class UpdateSceneRequestMapper extends BaseRequestMapper<UpdateSceneRequest, SceneModel> {
	public override map(req: UpdateSceneRequest): SceneModel {
		return {
			id: req.item.id,
			sceneName: req.item.sceneName,
			description: req.item.description,
			isGeographic: req.item.isGeographic,
			createdBy: req.item.createdBy,
			modifiedBy: req.item.modifiedBy,
		} as SceneModel;
	}
}
