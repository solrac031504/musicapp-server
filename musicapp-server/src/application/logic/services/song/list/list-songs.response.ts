import { BaseListResponse } from "../../../../common/responses/base-list-response.ts";
import { SongDTO } from "../../../../dto/song.dto.ts";

export class ListSongsResponse extends BaseListResponse<SongDTO> {
	constructor(dtos: SongDTO[]) {
		super(dtos);
	}
}
