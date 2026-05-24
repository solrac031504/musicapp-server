import { ArtistGroupModel } from "../../../../domain/models/artist-group.model.ts";
import { BaseResponseMapper } from "../../../common/mappers/base-response-mapper.ts";
import { ArtistGroupDTO } from "../../../dto/artist-group.dto.ts";
import { GetArtistGroupResponse } from "../../services/artist-group/get/get-artist-group.response.ts";

export class GetArtistGroupResponseMapper extends BaseResponseMapper<GetArtistGroupResponse, ArtistGroupModel> {
	public override map(model: ArtistGroupModel): GetArtistGroupResponse {
		return new GetArtistGroupResponse({
			id: model.id,
			artistGroupName: model.artistGroupName,
			isActive: model.isActive,
			createdBy: model.createdBy,
			modifiedBy: model.modifiedBy,
		} as ArtistGroupDTO);
	}
}
