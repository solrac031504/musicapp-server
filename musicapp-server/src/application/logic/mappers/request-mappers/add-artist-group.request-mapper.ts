import { ArtistGroupModel } from "../../../../domain/models/artist-group.model.ts";
import { BaseRequestMapper } from "../../../common/mappers/base-request-mapper.ts";
import { AddArtistGroupRequest } from "../../services/artist-group/add/add-artist-group.request.ts";

export class AddArtistGroupRequestMapper extends BaseRequestMapper<AddArtistGroupRequest, ArtistGroupModel> {
	public override map(req: AddArtistGroupRequest): ArtistGroupModel {
		return {
			id: req.item.id,
			artistGroupName: req.item.artistGroupName,
			isActive: req.item.isActive,
			createdBy: req.item.createdBy,
			modifiedBy: req.item.modifiedBy,
		} as ArtistGroupModel;
	}
}
