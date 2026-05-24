import { SongModel } from "../../../../domain/models/song.model.ts";
import { BaseListResponseMapper } from "../../../common/mappers/base-list-response-mapper.ts";
import { SongDTO } from "../../../dto/song.dto.ts";
import { ListSongsResponse } from "../../services/song/list/list-songs.response.ts";

export class ListSongsResponseMapper extends BaseListResponseMapper<ListSongsResponse, SongModel> {
	public override map(models: SongModel[]): ListSongsResponse {
		const dtos = models.map((m) => new SongDTO(m));

		return new ListSongsResponse(dtos);
	}
}
