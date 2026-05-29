import { BaseListResponse } from "../../../../../common/responses/base-list-response.ts";
import { GenreHierarchyViewDTO } from "../../../../../dto/genre-hierarchy-view.dto.ts";

export class ListGenreHierarchyViewByGenreResponse extends BaseListResponse<GenreHierarchyViewDTO> {
	constructor(dtos: GenreHierarchyViewDTO[]) {
		super(dtos);
	}
}
