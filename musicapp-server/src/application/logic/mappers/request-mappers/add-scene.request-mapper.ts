import { SceneModel } from "../../../../domain/models/scene.model.ts";
import { BaseRequestMapper } from "../../../common/mappers/base-request-mapper.ts";
import { AddSceneRequest } from "../../services/scene/add/add-scene.request.ts";

export class AddSceneRequestMapper extends BaseRequestMapper<AddSceneRequest, SceneModel> {
	public override map(req: AddSceneRequest): SceneModel {
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
