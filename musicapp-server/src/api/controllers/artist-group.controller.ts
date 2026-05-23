import { AddArtistGroupRequest } from "../../application/logic/services/artist-group/add/add-artist-group.request.ts";
import { AddArtistGroupResponse } from "../../application/logic/services/artist-group/add/add-artist-group.response.ts";
import { AddArtistGroupService } from "../../application/logic/services/artist-group/add/add-artist-group.service.ts";
import { DeleteArtistGroupRequest } from "../../application/logic/services/artist-group/delete/delete-artist-group.request.ts";
import { DeleteArtistGroupResponse } from "../../application/logic/services/artist-group/delete/delete-artist-group.response.ts";
import { DeleteArtistGroupService } from "../../application/logic/services/artist-group/delete/delete-artist-group.service.ts";
import { GetArtistGroupRequest } from "../../application/logic/services/artist-group/get/get-artist-group.request.ts";
import { GetArtistGroupResponse } from "../../application/logic/services/artist-group/get/get-artist-group.response.ts";
import { GetArtistGroupService } from "../../application/logic/services/artist-group/get/get-artist-group.service.ts";
import { ListArtistGroupsRequest } from "../../application/logic/services/artist-group/list/list-artist-groups.request.ts";
import { ListArtistGroupsResponse } from "../../application/logic/services/artist-group/list/list-artist-groups.response.ts";
import { ListArtistGroupsService } from "../../application/logic/services/artist-group/list/list-artist-groups.service.ts";
import { UpdateArtistGroupRequest } from "../../application/logic/services/artist-group/update/update-artist-group.request.ts";
import { UpdateArtistGroupResponse } from "../../application/logic/services/artist-group/update/update-artist-group.response.ts";
import { UpdateArtistGroupService } from "../../application/logic/services/artist-group/update/update-artist-group.service.ts";

export class ArtistGroupController {
	private readonly addArtistGroupService;
	private readonly deleteArtistGroupService;
	private readonly getArtistGroupService;
	private readonly listArtistGroupsService;
	private readonly updateArtistGroupService;

	constructor(
		addArtistGroupService: AddArtistGroupService,
		deleteArtistGroupService: DeleteArtistGroupService,
		getArtistGroupService: GetArtistGroupService,
		listArtistGroupsService: ListArtistGroupsService,
		updateArtistGroupService: UpdateArtistGroupService,
	) {
		this.addArtistGroupService = addArtistGroupService;
		this.deleteArtistGroupService = deleteArtistGroupService;
		this.getArtistGroupService = getArtistGroupService;
		this.listArtistGroupsService = listArtistGroupsService;
		this.updateArtistGroupService = updateArtistGroupService;
	}

	public async addArtistGroup(req: AddArtistGroupRequest): Promise<AddArtistGroupResponse> {
		return await this.addArtistGroupService.execute(req);
	}

	public async deleteArtistGroup(req: DeleteArtistGroupRequest): Promise<DeleteArtistGroupResponse> {
		return await this.deleteArtistGroupService.execute(req);
	}

	public async getArtistGroup(req: GetArtistGroupRequest): Promise<GetArtistGroupResponse> {
		return await this.getArtistGroupService.execute(req);
	}

	public async listArtistGroups(req: ListArtistGroupsRequest): Promise<ListArtistGroupsResponse> {
		return await this.listArtistGroupsService.execute(req);
	}

	public async updateArtistGroup(req: UpdateArtistGroupRequest): Promise<UpdateArtistGroupResponse> {
		return await this.updateArtistGroupService.execute(req);
	}
}
