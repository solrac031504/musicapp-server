import { BaseItemResponse } from "../../../../common/responses/base-item-response.ts";
import { SongDTO } from "../../../../dto/song.dto.ts";

export class AddSongResponse extends BaseItemResponse<SongDTO> {
	constructor(item: SongDTO | null = null) {
		super(item);
	}
}
