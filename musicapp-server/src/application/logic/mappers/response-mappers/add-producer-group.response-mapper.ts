import { ProducerGroupModel } from "../../../../domain/models/producer-group.model.ts";
import { BaseResponseMapper } from "../../../common/mappers/base-response-mapper.ts";
import { ProducerGroupDTO } from "../../../dto/producer-group.dto.ts";
import { AddProducerGroupResponse } from "../../services/producer-group/add/add-producer-group.response.ts";

export class AddProducerGroupResponseMapper extends BaseResponseMapper<AddProducerGroupResponse, ProducerGroupModel> {
	public override map(model: ProducerGroupModel): AddProducerGroupResponse {
		return new AddProducerGroupResponse(new ProducerGroupDTO(model));
	}
}
