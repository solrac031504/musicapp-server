import { ArtistModel } from "../../../../domain/models/artist.model.ts";
import { BaseResponseMapper } from "../../../common/mappers/base-response-mapper.ts";
import { ArtistDTO } from "../../../dto/artist.dto.ts";
import { UpdateArtistResponse } from "../../services/artist/update/update-artist.response.ts";

export class UpdateArtistResponseMapper extends BaseResponseMapper<UpdateArtistResponse, ArtistModel> {
	public override map(model: ArtistModel): UpdateArtistResponse {
		return new UpdateArtistResponse(new ArtistDTO(model));
	}
}
