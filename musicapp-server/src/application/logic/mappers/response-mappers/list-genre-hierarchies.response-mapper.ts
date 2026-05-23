import { GenreHierarchyModel } from "../../../../domain/models/genre-hierarchy.model.ts";
import { BaseListResponseMapper } from "../../../common/mappers/base-list-response-mapper.ts";
import { GenreHierarchyDTO } from "../../../dto/genre-hierarchy.dto.ts";
import { ListGenreHierarchiesResponse } from "../../services/genre-hierarchy/list/list-genre-hierarchies.response.ts";

export class ListGenreHierarchiesResponseMapper extends BaseListResponseMapper<ListGenreHierarchiesResponse, GenreHierarchyModel> {
	public override map(models: GenreHierarchyModel[]): ListGenreHierarchiesResponse {
		const dtos = models.map((model) => new GenreHierarchyDTO(model));

		return new ListGenreHierarchiesResponse(dtos);
	}
}
