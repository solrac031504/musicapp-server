import { ProducerGroupMembershipModel } from "../../../../domain/models/producer-group-membership.model.ts";
import { BaseResponseMapper } from "../../../common/mappers/base-response-mapper.ts";
import { ProducerGroupMembershipDTO } from "../../../dto/producer-group-membership.dto.ts";
import { AddProducerGroupMembershipResponse } from "../../services/producer-group-membership/add/add-producer-group-membership.response.ts";

export class AddProducerGroupMembershipResponseMapper extends BaseResponseMapper<AddProducerGroupMembershipResponse, ProducerGroupMembershipModel> {
	public override map(model: ProducerGroupMembershipModel): AddProducerGroupMembershipResponse {
		return new AddProducerGroupMembershipResponse(new ProducerGroupMembershipDTO(model));
	}
}
