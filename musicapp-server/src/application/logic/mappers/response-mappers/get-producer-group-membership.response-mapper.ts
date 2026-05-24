import { ProducerGroupMembershipModel } from "../../../../domain/models/producer-group-membership.model.ts";
import { BaseResponseMapper } from "../../../common/mappers/base-response-mapper.ts";
import { ProducerGroupMembershipDTO } from "../../../dto/producer-group-membership.dto.ts";
import { GetProducerGroupMembershipResponse } from "../../services/producer-group-membership/get/get-producer-group-membership.response.ts";

export class GetProducerGroupMembershipResponseMapper extends BaseResponseMapper<GetProducerGroupMembershipResponse, ProducerGroupMembershipModel> {
	public override map(model: ProducerGroupMembershipModel): GetProducerGroupMembershipResponse {
		return new GetProducerGroupMembershipResponse(new ProducerGroupMembershipDTO(model));
	}
}
