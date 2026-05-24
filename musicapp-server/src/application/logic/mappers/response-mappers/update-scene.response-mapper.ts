import { SceneModel } from "../../../../domain/models/scene.model.ts";
import { BaseResponseMapper } from "../../../common/mappers/base-response-mapper.ts";
import { SceneDTO } from "../../../dto/scene.dto.ts";
import { UpdateSceneResponse } from "../../services/scene/update/update-scene.response.ts";

export class UpdateSceneResponseMapper extends BaseResponseMapper<UpdateSceneResponse, SceneModel> {
	public override map(model: SceneModel): UpdateSceneResponse {
		return new UpdateSceneResponse(new SceneDTO(model));
	}
}
