import { GenreModel } from "../../../../domain/models/genre.model.ts";
import { BaseRequestMapper } from "../../../common/mappers/base-request-mapper.ts";
import { AddGenreRequest } from "../../services/genre/add/add-genre.request.ts";

export class AddGenreRequestMapper extends BaseRequestMapper<AddGenreRequest, GenreModel> {
	public override map(req: AddGenreRequest): GenreModel {
		return {
			id: req.item.id,
			genreName: req.item.genreName,
			description: req.item.description,
			createdBy: req.item.createdBy,
			modifiedBy: req.item.modifiedBy,
		} as GenreModel;
	}
}
