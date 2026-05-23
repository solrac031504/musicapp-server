import { GenreModel } from "../../../../domain/models/genre.model.ts";
import { BaseListResponseMapper } from "../../../common/mappers/base-list-response-mapper.ts";
import { GenreDTO } from "../../../dto/genre.dto.ts";
import { ListGenresResponse } from "../../services/genre/list/list-genres.response.ts";

export class ListGenresResponseMapper extends BaseListResponseMapper<ListGenresResponse, GenreModel> {
	public override map(models: GenreModel[]): ListGenresResponse {
		const dtos = models.map((model) => new GenreDTO(model));

		return new ListGenresResponse(dtos);
	}
}
