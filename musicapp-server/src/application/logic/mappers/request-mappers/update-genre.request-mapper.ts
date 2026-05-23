import { GenreModel } from "../../../../domain/models/genre.model.ts";
import { BaseRequestMapper } from "../../../common/mappers/base-request-mapper.ts";
import { UpdateGenreRequest } from "../../services/genre/update/update-genre.request.ts";

export class UpdateGenreRequestMapper extends BaseRequestMapper<UpdateGenreRequest, GenreModel> {
	public override map(req: UpdateGenreRequest): GenreModel {
		return {
			id: req.item.id,
			genreName: req.item.genreName,
			description: req.item.description,
			createdBy: req.item.createdBy,
			modifiedBy: req.item.modifiedBy,
		} as GenreModel;
	}
}
