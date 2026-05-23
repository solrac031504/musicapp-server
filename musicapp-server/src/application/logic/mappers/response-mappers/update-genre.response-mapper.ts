import { GenreModel } from "../../../../domain/models/genre.model.ts";
import { BaseResponseMapper } from "../../../common/mappers/base-response-mapper.ts";
import { GenreDTO } from "../../../dto/genre.dto.ts";
import { UpdateGenreResponse } from "../../services/genre/update/update-genre.response.ts";

export class UpdateGenreResponseMapper extends BaseResponseMapper<UpdateGenreResponse, GenreModel> {
	public override map(model: GenreModel): UpdateGenreResponse {
		return new UpdateGenreResponse(new GenreDTO(model));
	}
}
