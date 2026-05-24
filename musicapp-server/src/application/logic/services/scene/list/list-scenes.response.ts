import { BaseListResponse } from "../../../../common/responses/base-list-response.ts";
import { SceneDTO } from "../../../../dto/scene.dto.ts";

export class ListScenesResponse extends BaseListResponse<SceneDTO> {
	constructor(dtos: SceneDTO[]) {
		super(dtos);
	}
}
