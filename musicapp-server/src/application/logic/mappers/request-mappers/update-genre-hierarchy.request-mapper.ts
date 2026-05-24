import { GenreHierarchyModel } from "../../../../domain/models/genre-hierarchy.model.ts";
import { BaseRequestMapper } from "../../../common/mappers/base-request-mapper.ts";
import { UpdateGenreHierarchyRequest } from "../../services/genre-hierarchy/update/update-genre-hierarchy.request.ts";

export class UpdateGenreHierarchyRequestMapper extends BaseRequestMapper<UpdateGenreHierarchyRequest, GenreHierarchyModel> {
	public override map(req: UpdateGenreHierarchyRequest): GenreHierarchyModel {
		return {
			id: req.item.id,
			genreId: req.item.genreId,
			parentGenreId: req.item.parentGenreId,
			createdBy: req.item.createdBy,
			modifiedBy: req.item.modifiedBy,
		} as GenreHierarchyModel;
	}
}
