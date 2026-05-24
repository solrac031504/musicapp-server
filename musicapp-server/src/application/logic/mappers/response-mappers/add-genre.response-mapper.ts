import { GenreModel } from "../../../../domain/models/genre.model.ts";
import { BaseResponseMapper } from "../../../common/mappers/base-response-mapper.ts";
import { GenreDTO } from "../../../dto/genre.dto.ts";
import { AddGenreResponse } from "../../services/genre/add/add-genre.response.ts";

export class AddGenreResponseMapper extends BaseResponseMapper<AddGenreResponse, GenreModel> {
	public override map(model: GenreModel): AddGenreResponse {
		return new AddGenreResponse(new GenreDTO(model));
	}
}
