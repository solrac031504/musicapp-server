import { ProducerGroupMembershipModel } from "../../../../domain/models/producer-group-membership.model.ts";
import { BaseListResponseMapper } from "../../../common/mappers/base-list-response-mapper.ts";
import { ProducerGroupMembershipDTO } from "../../../dto/producer-group-membership.dto.ts";
import { ListProducerGroupMembershipsResponse } from "../../services/producer-group-membership/list/list-producer-group-memberships.response.ts";

export class ListProducerGroupMembershipsResponseMapper extends BaseListResponseMapper<ListProducerGroupMembershipsResponse, ProducerGroupMembershipModel> {
	public override map(models: ProducerGroupMembershipModel[]): ListProducerGroupMembershipsResponse {
		return new ListProducerGroupMembershipsResponse(models.map((model) => new ProducerGroupMembershipDTO(model)));
	}
}
