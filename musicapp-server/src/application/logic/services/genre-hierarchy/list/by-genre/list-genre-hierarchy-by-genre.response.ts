import { BaseListResponse } from "@application/common/responses/base-list-response.ts";
import { GenreHierarchyViewDTO } from "@application/dto/genre-hierarchy-view.dto.ts";

export class ListGenreHierarchyByGenreResponse extends BaseListResponse<GenreHierarchyViewDTO> {
	constructor(dtos: GenreHierarchyViewDTO[]) {
		super(dtos);
	}
}
