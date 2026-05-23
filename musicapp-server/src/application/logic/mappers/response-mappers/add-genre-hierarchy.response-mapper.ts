import { GenreHierarchyModel } from "../../../../domain/models/genre-hierarchy.model.ts";
import { BaseResponseMapper } from "../../../common/mappers/base-response-mapper.ts";
import { GenreHierarchyDTO } from "../../../dto/genre-hierarchy.dto.ts";
import { AddGenreHierarchyResponse } from "../../services/genre-hierarchy/add/add-genre-hierarchy.response.ts";

export class AddGenreHierarchyResponseMapper extends BaseResponseMapper<AddGenreHierarchyResponse, GenreHierarchyModel> {
	public override map(model: GenreHierarchyModel): AddGenreHierarchyResponse {
		return new AddGenreHierarchyResponse(new GenreHierarchyDTO(model));
	}
}
