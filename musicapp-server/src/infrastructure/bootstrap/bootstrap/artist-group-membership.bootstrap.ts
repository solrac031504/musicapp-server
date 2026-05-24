import { DataSource } from "typeorm";
import { ArtistGroupMembershipController } from "../../../api/controllers/artist-group-membership.controller.ts";
import { AddArtistGroupMembershipService } from "../../../application/logic/services/artist-group-membership/add/add-artist-group-membership.service.ts";
import { DeleteArtistGroupMembershipService } from "../../../application/logic/services/artist-group-membership/delete/delete-artist-group-membership.service.ts";
import { GetArtistGroupMembershipService } from "../../../application/logic/services/artist-group-membership/get/get-artist-group-membership.service.ts";
import { ListArtistGroupMembershipsService } from "../../../application/logic/services/artist-group-membership/list/list-artist-group-memberships.service.ts";
import { UpdateArtistGroupMembershipService } from "../../../application/logic/services/artist-group-membership/update/update-artist-group-membership.service.ts";
import { ArtistGroupMembershipRepository } from "../../data-access/repositories/artist-group-membership.repository.ts";

export function bootstrapArtistGroupMembership(dataSource: DataSource): ArtistGroupMembershipController {
	const repo = new ArtistGroupMembershipRepository(dataSource);

	return new ArtistGroupMembershipController(
		new AddArtistGroupMembershipService(repo),
		new DeleteArtistGroupMembershipService(repo),
		new GetArtistGroupMembershipService(repo),
		new ListArtistGroupMembershipsService(repo),
		new UpdateArtistGroupMembershipService(repo),
	);
}
