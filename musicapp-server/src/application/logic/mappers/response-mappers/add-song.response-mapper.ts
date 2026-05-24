import { SongModel } from "../../../../domain/models/song.model.ts";
import { BaseResponseMapper } from "../../../common/mappers/base-response-mapper.ts";
import { SongDTO } from "../../../dto/song.dto.ts";
import { AddSongResponse } from "../../services/song/add/add-song.response.ts";

export class AddSongResponseMapper extends BaseResponseMapper<AddSongResponse, SongModel> {
	public override map(model: SongModel): AddSongResponse {
		return new AddSongResponse(new SongDTO(model));
	}
}
