import { ProducerGroupModel } from "../../../../domain/models/producer-group.model.ts";
import { BaseResponseMapper } from "../../../common/mappers/base-response-mapper.ts";
import { ProducerGroupDTO } from "../../../dto/producer-group.dto.ts";
import { UpdateProducerGroupResponse } from "../../services/producer-group/update/update-producer-group.response.ts";

export class UpdateProducerGroupResponseMapper extends BaseResponseMapper<UpdateProducerGroupResponse, ProducerGroupModel> {
	public override map(model: ProducerGroupModel): UpdateProducerGroupResponse {
		return new UpdateProducerGroupResponse(new ProducerGroupDTO(model));
	}
}
