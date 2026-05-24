import { BaseListResponse } from "../../../../common/responses/base-list-response.ts";
import { GenreHierarchyDTO } from "../../../../dto/genre-hierarchy.dto.ts";

export class ListGenreHierarchiesResponse extends BaseListResponse<GenreHierarchyDTO> {
	constructor(items: GenreHierarchyDTO[] = []) {
		super(items);
	}
}
