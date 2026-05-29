import { GenreHierarchyViewModel } from "../../../../domain/models/genre-hierarchy-view.model.ts";
import { BaseListResponseMapper } from "../../../common/mappers/base-list-response-mapper.ts";
import { GenreHierarchyViewDTO } from "../../../dto/genre-hierarchy-view.dto.ts";
import { ListGenreHierarchyViewByGenreResponse } from "../../services/genre-hierarchy-view/list/by-genre/list-genre-hierarchy-view-by-genre.response.ts";

export class ListGenreHierarchyViewByGenreResponseMapper extends BaseListResponseMapper<ListGenreHierarchyViewByGenreResponse, GenreHierarchyViewModel> {
	public override map(models: GenreHierarchyViewModel[]): ListGenreHierarchyViewByGenreResponse {
		return new ListGenreHierarchyViewByGenreResponse(models.map((m) => new GenreHierarchyViewDTO(m)));
	}
}
