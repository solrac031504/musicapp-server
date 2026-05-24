import { ProducerGroupModel } from "../../../../domain/models/producer-group.model.ts";
import { BaseListResponseMapper } from "../../../common/mappers/base-list-response-mapper.ts";
import { ProducerGroupDTO } from "../../../dto/producer-group.dto.ts";
import { ListProducerGroupsResponse } from "../../services/producer-group/list/list-producer-groups.response.ts";

export class ListProducerGroupsResponseMapper extends BaseListResponseMapper<ListProducerGroupsResponse, ProducerGroupModel> {
	public override map(models: ProducerGroupModel[]): ListProducerGroupsResponse {
		return new ListProducerGroupsResponse(models.map((model) => new ProducerGroupDTO(model)));
	}
}
