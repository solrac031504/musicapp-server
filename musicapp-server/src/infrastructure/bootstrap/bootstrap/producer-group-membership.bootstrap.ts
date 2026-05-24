import { DataSource } from "typeorm";
import { ProducerGroupMembershipController } from "../../../api/controllers/producer-group-membership.controller.ts";
import { AddProducerGroupMembershipService } from "../../../application/logic/services/producer-group-membership/add/add-producer-group-membership.service.ts";
import { DeleteProducerGroupMembershipService } from "../../../application/logic/services/producer-group-membership/delete/delete-producer-group-membership.service.ts";
import { GetProducerGroupMembershipService } from "../../../application/logic/services/producer-group-membership/get/get-producer-group-membership.service.ts";
import { ListProducerGroupMembershipsService } from "../../../application/logic/services/producer-group-membership/list/list-producer-group-memberships.service.ts";
import { UpdateProducerGroupMembershipService } from "../../../application/logic/services/producer-group-membership/update/update-producer-group-membership.service.ts";
import { ProducerGroupMembershipRepository } from "../../data-access/repositories/producer-group-membership.repository.ts";

export function bootstrapProducerGroupMembership(dataSource: DataSource): ProducerGroupMembershipController {
	const repo = new ProducerGroupMembershipRepository(dataSource);

	return new ProducerGroupMembershipController(
		new AddProducerGroupMembershipService(repo),
		new DeleteProducerGroupMembershipService(repo),
		new GetProducerGroupMembershipService(repo),
		new ListProducerGroupMembershipsService(repo),
		new UpdateProducerGroupMembershipService(repo),
	);
}
