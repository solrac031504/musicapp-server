import { BaseListResponse } from "../../../../common/responses/base-list-response.ts";
import { GenreDTO } from "../../../../dto/genre.dto.ts";

export class ListGenresResponse extends BaseListResponse<GenreDTO> {
	constructor(items: GenreDTO[] = []) {
		super(items);
	}
}
