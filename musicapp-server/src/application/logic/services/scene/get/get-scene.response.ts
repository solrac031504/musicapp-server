import { BaseItemResponse } from "../../../../common/responses/base-item-response.ts";
import { SceneDTO } from "../../../../dto/scene.dto.ts";

export class GetSceneResponse extends BaseItemResponse<SceneDTO> {
	constructor(item: SceneDTO | null = null) {
		super(item);
	}
}
