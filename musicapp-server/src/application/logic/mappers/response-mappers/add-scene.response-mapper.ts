import { SceneModel } from "../../../../domain/models/scene.model.ts";
import { BaseResponseMapper } from "../../../common/mappers/base-response-mapper.ts";
import { SceneDTO } from "../../../dto/scene.dto.ts";
import { AddSceneResponse } from "../../services/scene/add/add-scene.response.ts";

export class AddSceneResponseMapper extends BaseResponseMapper<AddSceneResponse, SceneModel> {
	public override map(model: SceneModel): AddSceneResponse {
		return new AddSceneResponse(new SceneDTO(model));
	}
}
