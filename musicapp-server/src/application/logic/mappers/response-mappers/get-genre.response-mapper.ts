import { GenreModel } from "../../../../domain/models/genre.model.ts";
import { BaseResponseMapper } from "../../../common/mappers/base-response-mapper.ts";
import { GenreDTO } from "../../../dto/genre.dto.ts";
import { GetGenreResponse } from "../../services/genre/get/get-genre.response.ts";

export class GetGenreResponseMapper extends BaseResponseMapper<GetGenreResponse, GenreModel> {
	public override map(model: GenreModel): GetGenreResponse {
		return new GetGenreResponse(new GenreDTO(model));
	}
}
