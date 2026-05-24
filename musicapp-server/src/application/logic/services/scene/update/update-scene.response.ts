import { BaseItemResponse } from "../../../../common/responses/base-item-response.ts";
import { SceneDTO } from "../../../../dto/scene.dto.ts";

export class UpdateSceneResponse extends BaseItemResponse<SceneDTO> {
	constructor(dto: SceneDTO | null) {
		super(dto);
	}
}
