import { ArtistModel } from "../../../../domain/models/artist.model.ts";
import { BaseListResponseMapper } from "../../../common/mappers/base-list-response-mapper.ts";
import { ArtistDTO } from "../../../dto/artist.dto.ts";
import { ListArtistsResponse } from "../../services/artist/list/list-artists.response.ts";

export class ListArtistsResponseMapper extends BaseListResponseMapper<ListArtistsResponse, ArtistModel> {
	public override map(models: ArtistModel[]): ListArtistsResponse {
		const dtos = models.map((m) => new ArtistDTO(m));

		return new ListArtistsResponse(dtos);
	}
}
