import { ProducerGroupMembershipModel } from "../../../../domain/models/producer-group-membership.model.ts";
import { BaseResponseMapper } from "../../../common/mappers/base-response-mapper.ts";
import { ProducerGroupMembershipDTO } from "../../../dto/producer-group-membership.dto.ts";
import { UpdateProducerGroupMembershipResponse } from "../../services/producer-group-membership/update/update-producer-group-membership.response.ts";

export class UpdateProducerGroupMembershipResponseMapper extends BaseResponseMapper<UpdateProducerGroupMembershipResponse, ProducerGroupMembershipModel> {
	public override map(model: ProducerGroupMembershipModel): UpdateProducerGroupMembershipResponse {
		return new UpdateProducerGroupMembershipResponse(new ProducerGroupMembershipDTO(model));
	}
}
