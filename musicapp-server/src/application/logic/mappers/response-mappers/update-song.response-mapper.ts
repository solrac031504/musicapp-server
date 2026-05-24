import { SongModel } from "../../../../domain/models/song.model.ts";
import { BaseResponseMapper } from "../../../common/mappers/base-response-mapper.ts";
import { SongDTO } from "../../../dto/song.dto.ts";
import { UpdateSongResponse } from "../../services/song/update/update-song.response.ts";

export class UpdateSongResponseMapper extends BaseResponseMapper<UpdateSongResponse, SongModel> {
	public override map(model: SongModel): UpdateSongResponse {
		return new UpdateSongResponse(new SongDTO(model));
	}
}
