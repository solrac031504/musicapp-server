import { GenreHierarchyModel } from "../../../../domain/models/genre-hierarchy.model.ts";
import { BaseRequestMapper } from "../../../common/mappers/base-request-mapper.ts";
import { AddGenreHierarchyRequest } from "../../services/genre-hierarchy/add/add-genre-hierarchy.request.ts";

export class AddGenreHierarchyRequestMapper extends BaseRequestMapper<AddGenreHierarchyRequest, GenreHierarchyModel> {
	public override map(req: AddGenreHierarchyRequest): GenreHierarchyModel {
		return {
			id: req.item.id,
			genreId: req.item.genreId,
			parentGenreId: req.item.parentGenreId,
			createdBy: req.item.createdBy,
			modifiedBy: req.item.modifiedBy,
		} as GenreHierarchyModel;
	}
}
