import { DataSource } from "typeorm";
import { GenreController } from "../../../api/controllers/genre.controller.ts";
import { AddGenreService } from "../../../application/logic/services/genre/add/add-genre.service.ts";
import { DeleteGenreService } from "../../../application/logic/services/genre/delete/delete-genre.service.ts";
import { GetGenreService } from "../../../application/logic/services/genre/get/get-genre.service.ts";
import { ListGenresService } from "../../../application/logic/services/genre/list/list-genres.service.ts";
import { UpdateGenreService } from "../../../application/logic/services/genre/update/update-genre.service.ts";
import { GenreRepository } from "../../data-access/repositories/genre.repository.ts";

export function bootstrapGenre(dataSource: DataSource): GenreController {
	const repo = new GenreRepository(dataSource);

	return new GenreController(
		new AddGenreService(repo),
		new DeleteGenreService(repo),
		new GetGenreService(repo),
		new ListGenresService(repo),
		new UpdateGenreService(repo),
	);
}
