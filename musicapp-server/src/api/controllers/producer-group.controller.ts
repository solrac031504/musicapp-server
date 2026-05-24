import { AddProducerGroupRequest } from "../../application/logic/services/producer-group/add/add-producer-group.request.ts";
import { AddProducerGroupResponse } from "../../application/logic/services/producer-group/add/add-producer-group.response.ts";
import { AddProducerGroupService } from "../../application/logic/services/producer-group/add/add-producer-group.service.ts";
import { DeleteProducerGroupRequest } from "../../application/logic/services/producer-group/delete/delete-producer-group.request.ts";
import { DeleteProducerGroupResponse } from "../../application/logic/services/producer-group/delete/delete-producer-group.response.ts";
import { DeleteProducerGroupService } from "../../application/logic/services/producer-group/delete/delete-producer-group.service.ts";
import { GetProducerGroupRequest } from "../../application/logic/services/producer-group/get/get-producer-group.request.ts";
import { GetProducerGroupResponse } from "../../application/logic/services/producer-group/get/get-producer-group.response.ts";
import { GetProducerGroupService } from "../../application/logic/services/producer-group/get/get-producer-group.service.ts";
import { ListProducerGroupsRequest } from "../../application/logic/services/producer-group/list/list-producer-groups.request.ts";
import { ListProducerGroupsResponse } from "../../application/logic/services/producer-group/list/list-producer-groups.response.ts";
import { ListProducerGroupsService } from "../../application/logic/services/producer-group/list/list-producer-groups.service.ts";
import { UpdateProducerGroupRequest } from "../../application/logic/services/producer-group/update/update-producer-group.request.ts";
import { UpdateProducerGroupResponse } from "../../application/logic/services/producer-group/update/update-producer-group.response.ts";
import { UpdateProducerGroupService } from "../../application/logic/services/producer-group/update/update-producer-group.service.ts";

export class ProducerGroupController {
	private readonly addProducerGroupService;
	private readonly deleteProducerGroupService;
	private readonly getProducerGroupService;
	private readonly listProducerGroupsService;
	private readonly updateProducerGroupService;

	constructor(
		addProducerGroupService: AddProducerGroupService,
		deleteProducerGroupService: DeleteProducerGroupService,
		getProducerGroupService: GetProducerGroupService,
		listProducerGroupsService: ListProducerGroupsService,
		updateProducerGroupService: UpdateProducerGroupService,
	) {
		this.addProducerGroupService = addProducerGroupService;
		this.deleteProducerGroupService = deleteProducerGroupService;
		this.getProducerGroupService = getProducerGroupService;
		this.listProducerGroupsService = listProducerGroupsService;
		this.updateProducerGroupService = updateProducerGroupService;
	}

	public async addProducerGroup(req: AddProducerGroupRequest): Promise<AddProducerGroupResponse> {
		return await this.addProducerGroupService.execute(req);
	}

	public async deleteProducerGroup(req: DeleteProducerGroupRequest): Promise<DeleteProducerGroupResponse> {
		return await this.deleteProducerGroupService.execute(req);
	}

	public async getProducerGroup(req: GetProducerGroupRequest): Promise<GetProducerGroupResponse> {
		return await this.getProducerGroupService.execute(req);
	}

	public async listProducerGroups(req: ListProducerGroupsRequest): Promise<ListProducerGroupsResponse> {
		return await this.listProducerGroupsService.execute(req);
	}

	public async updateProducerGroup(req: UpdateProducerGroupRequest): Promise<UpdateProducerGroupResponse> {
		return await this.updateProducerGroupService.execute(req);
	}
}
