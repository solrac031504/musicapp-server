import { BaseListResponseMapper } from "@application/common/mappers/base-list-response-mapper.ts";
import { GenreHierarchyViewDTO } from "@application/dto/genre-hierarchy-view.dto.ts";
import { ListGenreHierarchyByParentGenreResponse } from "@application/logic/services/genre-hierarchy/list/by-parent-genre/list-genre-hierarchy-by-parent-genre.response.ts";
import { GenreHierarchyViewModel } from "@domain/models/genre-hierarchy-view.model.ts";

export class ListGenreHierarchyByParentGenreResponseMapper extends BaseListResponseMapper<ListGenreHierarchyByParentGenreResponse, GenreHierarchyViewModel> {
	public override map(models: GenreHierarchyViewModel[]): ListGenreHierarchyByParentGenreResponse {
		return new ListGenreHierarchyByParentGenreResponse(models.map((m) => new GenreHierarchyViewDTO(m)));
	}
}
