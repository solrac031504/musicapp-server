import { BaseListResponseMapper } from "@application/common/mappers/base-list-response-mapper.ts";
import { GenreHierarchyViewDTO } from "@application/dto/genre-hierarchy-view.dto.ts";
import { ListGenreHierarchyByGenreResponse } from "@application/logic/services/genre-hierarchy/list/by-genre/list-genre-hierarchy-by-genre.response.ts";
import { GenreHierarchyViewModel } from "@domain/models/genre-hierarchy-view.model.ts";

export class ListGenreHierarchyByGenreResponseMapper extends BaseListResponseMapper<ListGenreHierarchyByGenreResponse, GenreHierarchyViewModel> {
	public override map(models: GenreHierarchyViewModel[]): ListGenreHierarchyByGenreResponse {
		return new ListGenreHierarchyByGenreResponse(models.map((m) => new GenreHierarchyViewDTO(m)));
	}
}
