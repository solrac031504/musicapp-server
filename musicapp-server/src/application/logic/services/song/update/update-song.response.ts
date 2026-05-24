import { BaseItemResponse } from "../../../../common/responses/base-item-response.ts";
import { SongDTO } from "../../../../dto/song.dto.ts";

export class UpdateSongResponse extends BaseItemResponse<SongDTO> {
	constructor(dto: SongDTO | null) {
		super(dto);
	}
}
