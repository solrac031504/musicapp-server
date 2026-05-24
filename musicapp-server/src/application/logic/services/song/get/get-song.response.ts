import { BaseItemResponse } from "../../../../common/responses/base-item-response.ts";
import { SongDTO } from "../../../../dto/song.dto.ts";

export class GetSongResponse extends BaseItemResponse<SongDTO> {
	constructor(item: SongDTO | null = null) {
		super(item);
	}
}
