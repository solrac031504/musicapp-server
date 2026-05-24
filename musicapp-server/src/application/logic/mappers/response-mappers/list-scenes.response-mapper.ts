import { SceneModel } from "../../../../domain/models/scene.model.ts";
import { BaseListResponseMapper } from "../../../common/mappers/base-list-response-mapper.ts";
import { SceneDTO } from "../../../dto/scene.dto.ts";
import { ListScenesResponse } from "../../services/scene/list/list-scenes.response.ts";

export class ListScenesResponseMapper extends BaseListResponseMapper<ListScenesResponse, SceneModel> {
	public override map(models: SceneModel[]): ListScenesResponse {
		const dtos = models.map((m) => new SceneDTO(m));

		return new ListScenesResponse(dtos);
	}
}
