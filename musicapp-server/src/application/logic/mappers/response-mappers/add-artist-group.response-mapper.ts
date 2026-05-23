import { ArtistGroupModel } from "../../../../domain/models/artist-group.model.ts";
import { BaseResponseMapper } from "../../../common/mappers/base-response-mapper.ts";
import { ArtistGroupDTO } from "../../../dto/artist-group.dto.ts";
import { AddArtistGroupResponse } from "../../services/artist-group/add/add-artist-group.response.ts";

export class AddArtistGroupResponseMapper extends BaseResponseMapper<AddArtistGroupResponse, ArtistGroupModel> {
	public override map(model: ArtistGroupModel): AddArtistGroupResponse {
		return new AddArtistGroupResponse({
			id: model.id,
			artistGroupName: model.artistGroupName,
			isActive: model.isActive,
			createdBy: model.createdBy,
			modifiedBy: model.modifiedBy,
		} as ArtistGroupDTO);
	}
}
