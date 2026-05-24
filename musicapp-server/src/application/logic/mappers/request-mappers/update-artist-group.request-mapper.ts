import { ArtistGroupModel } from "../../../../domain/models/artist-group.model.ts";
import { BaseRequestMapper } from "../../../common/mappers/base-request-mapper.ts";
import { UpdateArtistGroupRequest } from "../../services/artist-group/update/update-artist-group.request.ts";

export class UpdateArtistGroupRequestMapper extends BaseRequestMapper<UpdateArtistGroupRequest, ArtistGroupModel> {
	public override map(req: UpdateArtistGroupRequest): ArtistGroupModel {
		return {
			id: req.item.id,
			artistGroupName: req.item.artistGroupName,
			isActive: req.item.isActive,
			createdBy: req.item.createdBy,
			modifiedBy: req.item.modifiedBy,
		} as ArtistGroupModel;
	}
}
