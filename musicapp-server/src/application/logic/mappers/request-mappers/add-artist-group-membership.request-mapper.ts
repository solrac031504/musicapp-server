import { ArtistGroupMembershipModel } from "../../../../domain/models/artist-group-membership.model.ts";
import { BaseRequestMapper } from "../../../common/mappers/base-request-mapper.ts";
import { AddArtistGroupMembershipRequest } from "../../services/artist-group-membership/add/add-artist-group-membership.request.ts";

export class AddArtistGroupMembershipRequestMapper extends BaseRequestMapper<AddArtistGroupMembershipRequest, ArtistGroupMembershipModel> {
	public override map(req: AddArtistGroupMembershipRequest): ArtistGroupMembershipModel {
		return {
			id: req.item.id,
			artistGroupId: req.item.artistGroupId,
			artistId: req.item.artistId,
			createdBy: req.item.createdBy,
			modifiedBy: req.item.modifiedBy,
		} as ArtistGroupMembershipModel;
	}
}
