import { BaseItemResponse } from "../../../../common/responses/base-item-response.ts";
import { GenreHierarchyDTO } from "../../../../dto/genre-hierarchy.dto.ts";

export class UpdateGenreHierarchyResponse extends BaseItemResponse<GenreHierarchyDTO> {
	constructor(item: GenreHierarchyDTO | null = null) {
		super(item);
	}
}
