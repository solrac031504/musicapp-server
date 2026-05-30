import { BaseListResponseMapper } from "@application/common/mappers/base-list-response-mapper.ts";
import { GenreHierarchyViewDTO } from "@application/dto/genre-hierarchy-view.dto.ts";
import { ListGenreHierarchyViewByGenreResponse } from "@application/logic/services/genre-hierarchy-view/list/by-genre/list-genre-hierarchy-view-by-genre.response.ts";
import { GenreHierarchyViewModel } from "@domain/models/genre-hierarchy-view.model.ts";

export class ListGenreHierarchyViewByGenreResponseMapper extends BaseListResponseMapper<ListGenreHierarchyViewByGenreResponse, GenreHierarchyViewModel> {
	public override map(models: GenreHierarchyViewModel[]): ListGenreHierarchyViewByGenreResponse {
		return new ListGenreHierarchyViewByGenreResponse(models.map((m) => new GenreHierarchyViewDTO(m)));
	}
}
