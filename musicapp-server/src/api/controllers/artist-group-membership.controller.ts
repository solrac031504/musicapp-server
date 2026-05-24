import { AddArtistGroupMembershipRequest } from "../../application/logic/services/artist-group-membership/add/add-artist-group-membership.request.ts";
import { AddArtistGroupMembershipResponse } from "../../application/logic/services/artist-group-membership/add/add-artist-group-membership.response.ts";
import { AddArtistGroupMembershipService } from "../../application/logic/services/artist-group-membership/add/add-artist-group-membership.service.ts";
import { DeleteArtistGroupMembershipRequest } from "../../application/logic/services/artist-group-membership/delete/delete-artist-group-membership.request.ts";
import { DeleteArtistGroupMembershipResponse } from "../../application/logic/services/artist-group-membership/delete/delete-artist-group-membership.response.ts";
import { DeleteArtistGroupMembershipService } from "../../application/logic/services/artist-group-membership/delete/delete-artist-group-membership.service.ts";
import { GetArtistGroupMembershipRequest } from "../../application/logic/services/artist-group-membership/get/get-artist-group-membership.request.ts";
import { GetArtistGroupMembershipResponse } from "../../application/logic/services/artist-group-membership/get/get-artist-group-membership.response.ts";
import { GetArtistGroupMembershipService } from "../../application/logic/services/artist-group-membership/get/get-artist-group-membership.service.ts";
import { ListArtistGroupMembershipsRequest } from "../../application/logic/services/artist-group-membership/list/list-artist-group-memberships.request.ts";
import { ListArtistGroupMembershipsResponse } from "../../application/logic/services/artist-group-membership/list/list-artist-group-memberships.response.ts";
import { ListArtistGroupMembershipsService } from "../../application/logic/services/artist-group-membership/list/list-artist-group-memberships.service.ts";
import { UpdateArtistGroupMembershipRequest } from "../../application/logic/services/artist-group-membership/update/update-artist-group-membership.request.ts";
import { UpdateArtistGroupMembershipResponse } from "../../application/logic/services/artist-group-membership/update/update-artist-group-membership.response.ts";
import { UpdateArtistGroupMembershipService } from "../../application/logic/services/artist-group-membership/update/update-artist-group-membership.service.ts";

export class ArtistGroupMembershipController {
	private readonly addArtistGroupMembershipService;
	private readonly deleteArtistGroupMembershipService;
	private readonly getArtistGroupMembershipService;
	private readonly listArtistGroupMembershipsService;
	private readonly updateArtistGroupMembershipService;

	constructor(
		addArtistGroupMembershipService: AddArtistGroupMembershipService,
		deleteArtistGroupMembershipService: DeleteArtistGroupMembershipService,
		getArtistGroupMembershipService: GetArtistGroupMembershipService,
		listArtistGroupMembershipsService: ListArtistGroupMembershipsService,
		updateArtistGroupMembershipService: UpdateArtistGroupMembershipService,
	) {
		this.addArtistGroupMembershipService = addArtistGroupMembershipService;
		this.deleteArtistGroupMembershipService = deleteArtistGroupMembershipService;
		this.getArtistGroupMembershipService = getArtistGroupMembershipService;
		this.listArtistGroupMembershipsService = listArtistGroupMembershipsService;
		this.updateArtistGroupMembershipService = updateArtistGroupMembershipService;
	}

	public async addArtistGroupMembership(
		req: AddArtistGroupMembershipRequest,
	): Promise<AddArtistGroupMembershipResponse> {
		return await this.addArtistGroupMembershipService.execute(req);
	}

	public async deleteArtistGroupMembership(
		req: DeleteArtistGroupMembershipRequest,
	): Promise<DeleteArtistGroupMembershipResponse> {
		return await this.deleteArtistGroupMembershipService.execute(req);
	}

	public async getArtistGroupMembership(
		req: GetArtistGroupMembershipRequest,
	): Promise<GetArtistGroupMembershipResponse> {
		return await this.getArtistGroupMembershipService.execute(req);
	}

	public async listArtistGroupMemberships(
		req: ListArtistGroupMembershipsRequest,
	): Promise<ListArtistGroupMembershipsResponse> {
		return await this.listArtistGroupMembershipsService.execute(req);
	}

	public async updateArtistGroupMembership(
		req: UpdateArtistGroupMembershipRequest,
	): Promise<UpdateArtistGroupMembershipResponse> {
		return await this.updateArtistGroupMembershipService.execute(req);
	}
}
