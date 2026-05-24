import { GenreHierarchyModel } from "../../../../domain/models/genre-hierarchy.model.ts";
import { BaseResponseMapper } from "../../../common/mappers/base-response-mapper.ts";
import { GenreHierarchyDTO } from "../../../dto/genre-hierarchy.dto.ts";
import { UpdateGenreHierarchyResponse } from "../../services/genre-hierarchy/update/update-genre-hierarchy.response.ts";

export class UpdateGenreHierarchyResponseMapper extends BaseResponseMapper<UpdateGenreHierarchyResponse, GenreHierarchyModel> {
	public override map(model: GenreHierarchyModel): UpdateGenreHierarchyResponse {
		return new UpdateGenreHierarchyResponse(new GenreHierarchyDTO(model));
	}
}
