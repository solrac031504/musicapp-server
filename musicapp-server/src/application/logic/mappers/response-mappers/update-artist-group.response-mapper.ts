import { ArtistGroupModel } from "../../../../domain/models/artist-group.model.ts";
import { BaseResponseMapper } from "../../../common/mappers/base-response-mapper.ts";
import { ArtistGroupDTO } from "../../../dto/artist-group.dto.ts";
import { UpdateArtistGroupResponse } from "../../services/artist-group/update/update-artist-group.response.ts";

export class UpdateArtistGroupResponseMapper extends BaseResponseMapper<UpdateArtistGroupResponse, ArtistGroupModel> {
	public override map(model: ArtistGroupModel): UpdateArtistGroupResponse {
		return new UpdateArtistGroupResponse(new ArtistGroupDTO(model));
	}
}
