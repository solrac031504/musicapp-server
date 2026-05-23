import { BaseItemResponse } from "../../../../common/responses/base-item-response.ts";
import { GenreDTO } from "../../../../dto/genre.dto.ts";

export class UpdateGenreResponse extends BaseItemResponse<GenreDTO> {
	constructor(item: GenreDTO | null = null) {
		super(item);
	}
}
