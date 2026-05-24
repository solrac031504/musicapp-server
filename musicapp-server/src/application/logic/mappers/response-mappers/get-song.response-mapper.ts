import { SongModel } from "../../../../domain/models/song.model.ts";
import { BaseResponseMapper } from "../../../common/mappers/base-response-mapper.ts";
import { SongDTO } from "../../../dto/song.dto.ts";
import { GetSongResponse } from "../../services/song/get/get-song.response.ts";

export class GetSongResponseMapper extends BaseResponseMapper<GetSongResponse, SongModel> {
	public override map(model: SongModel): GetSongResponse {
		return new GetSongResponse(new SongDTO(model));
	}
}
