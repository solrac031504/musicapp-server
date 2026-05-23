import { GenreHierarchyModel } from "../../../../domain/models/genre-hierarchy.model.ts";
import { BaseResponseMapper } from "../../../common/mappers/base-response-mapper.ts";
import { GenreHierarchyDTO } from "../../../dto/genre-hierarchy.dto.ts";
import { GetGenreHierarchyResponse } from "../../services/genre-hierarchy/get/get-genre-hierarchy.response.ts";

export class GetGenreHierarchyResponseMapper extends BaseResponseMapper<GetGenreHierarchyResponse, GenreHierarchyModel> {
	public override map(model: GenreHierarchyModel): GetGenreHierarchyResponse {
		return new GetGenreHierarchyResponse(new GenreHierarchyDTO(model));
	}
}
