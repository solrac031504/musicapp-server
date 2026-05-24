import { AddProducerGroupMembershipRequest } from "../../application/logic/services/producer-group-membership/add/add-producer-group-membership.request.ts";
import { AddProducerGroupMembershipResponse } from "../../application/logic/services/producer-group-membership/add/add-producer-group-membership.response.ts";
import { AddProducerGroupMembershipService } from "../../application/logic/services/producer-group-membership/add/add-producer-group-membership.service.ts";
import { DeleteProducerGroupMembershipRequest } from "../../application/logic/services/producer-group-membership/delete/delete-producer-group-membership.request.ts";
import { DeleteProducerGroupMembershipResponse } from "../../application/logic/services/producer-group-membership/delete/delete-producer-group-membership.response.ts";
import { DeleteProducerGroupMembershipService } from "../../application/logic/services/producer-group-membership/delete/delete-producer-group-membership.service.ts";
import { GetProducerGroupMembershipRequest } from "../../application/logic/services/producer-group-membership/get/get-producer-group-membership.request.ts";
import { GetProducerGroupMembershipResponse } from "../../application/logic/services/producer-group-membership/get/get-producer-group-membership.response.ts";
import { GetProducerGroupMembershipService } from "../../application/logic/services/producer-group-membership/get/get-producer-group-membership.service.ts";
import { ListProducerGroupMembershipsRequest } from "../../application/logic/services/producer-group-membership/list/list-producer-group-memberships.request.ts";
import { ListProducerGroupMembershipsResponse } from "../../application/logic/services/producer-group-membership/list/list-producer-group-memberships.response.ts";
import { ListProducerGroupMembershipsService } from "../../application/logic/services/producer-group-membership/list/list-producer-group-memberships.service.ts";
import { UpdateProducerGroupMembershipRequest } from "../../application/logic/services/producer-group-membership/update/update-producer-group-membership.request.ts";
import { UpdateProducerGroupMembershipResponse } from "../../application/logic/services/producer-group-membership/update/update-producer-group-membership.response.ts";
import { UpdateProducerGroupMembershipService } from "../../application/logic/services/producer-group-membership/update/update-producer-group-membership.service.ts";

export class ProducerGroupMembershipController {
	private readonly addProducerGroupMembershipService;
	private readonly deleteProducerGroupMembershipService;
	private readonly getProducerGroupMembershipService;
	private readonly listProducerGroupMembershipsService;
	private readonly updateProducerGroupMembershipService;

	constructor(
		addProducerGroupMembershipService: AddProducerGroupMembershipService,
		deleteProducerGroupMembershipService: DeleteProducerGroupMembershipService,
		getProducerGroupMembershipService: GetProducerGroupMembershipService,
		listProducerGroupMembershipsService: ListProducerGroupMembershipsService,
		updateProducerGroupMembershipService: UpdateProducerGroupMembershipService,
	) {
		this.addProducerGroupMembershipService = addProducerGroupMembershipService;
		this.deleteProducerGroupMembershipService = deleteProducerGroupMembershipService;
		this.getProducerGroupMembershipService = getProducerGroupMembershipService;
		this.listProducerGroupMembershipsService = listProducerGroupMembershipsService;
		this.updateProducerGroupMembershipService = updateProducerGroupMembershipService;
	}

	public async addProducerGroupMembership(req: AddProducerGroupMembershipRequest): Promise<AddProducerGroupMembershipResponse> {
		return await this.addProducerGroupMembershipService.execute(req);
	}

	public async deleteProducerGroupMembership(req: DeleteProducerGroupMembershipRequest): Promise<DeleteProducerGroupMembershipResponse> {
		return await this.deleteProducerGroupMembershipService.execute(req);
	}

	public async getProducerGroupMembership(req: GetProducerGroupMembershipRequest): Promise<GetProducerGroupMembershipResponse> {
		return await this.getProducerGroupMembershipService.execute(req);
	}

	public async listProducerGroupMemberships(req: ListProducerGroupMembershipsRequest): Promise<ListProducerGroupMembershipsResponse> {
		return await this.listProducerGroupMembershipsService.execute(req);
	}

	public async updateProducerGroupMembership(req: UpdateProducerGroupMembershipRequest): Promise<UpdateProducerGroupMembershipResponse> {
		return await this.updateProducerGroupMembershipService.execute(req);
	}
}
