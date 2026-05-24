import { SceneModel } from "../../../../domain/models/scene.model.ts";
import { BaseResponseMapper } from "../../../common/mappers/base-response-mapper.ts";
import { SceneDTO } from "../../../dto/scene.dto.ts";
import { GetSceneResponse } from "../../services/scene/get/get-scene.response.ts";

export class GetSceneResponseMapper extends BaseResponseMapper<GetSceneResponse, SceneModel> {
	public override map(model: SceneModel): GetSceneResponse {
		return new GetSceneResponse(new SceneDTO(model));
	}
}
