import { AddGenreRequest } from "../../application/logic/services/genre/add/add-genre.request.ts";
import { AddGenreResponse } from "../../application/logic/services/genre/add/add-genre.response.ts";
import { AddGenreService } from "../../application/logic/services/genre/add/add-genre.service.ts";
import { DeleteGenreRequest } from "../../application/logic/services/genre/delete/delete-genre.request.ts";
import { DeleteGenreResponse } from "../../application/logic/services/genre/delete/delete-genre.response.ts";
import { DeleteGenreService } from "../../application/logic/services/genre/delete/delete-genre.service.ts";
import { GetGenreRequest } from "../../application/logic/services/genre/get/get-genre.request.ts";
import { GetGenreResponse } from "../../application/logic/services/genre/get/get-genre.response.ts";
import { GetGenreService } from "../../application/logic/services/genre/get/get-genre.service.ts";
import { ListGenresRequest } from "../../application/logic/services/genre/list/list-genres.request.ts";
import { ListGenresResponse } from "../../application/logic/services/genre/list/list-genres.response.ts";
import { ListGenresService } from "../../application/logic/services/genre/list/list-genres.service.ts";
import { UpdateGenreRequest } from "../../application/logic/services/genre/update/update-genre.request.ts";
import { UpdateGenreResponse } from "../../application/logic/services/genre/update/update-genre.response.ts";
import { UpdateGenreService } from "../../application/logic/services/genre/update/update-genre.service.ts";

export class GenreController {
	private readonly addGenreService;
	private readonly deleteGenreService;
	private readonly getGenreService;
	private readonly listGenresService;
	private readonly updateGenreService;

	constructor(
		addGenreService: AddGenreService,
		deleteGenreService: DeleteGenreService,
		getGenreService: GetGenreService,
		listGenresService: ListGenresService,
		updateGenreService: UpdateGenreService,
	) {
		this.addGenreService = addGenreService;
		this.deleteGenreService = deleteGenreService;
		this.getGenreService = getGenreService;
		this.listGenresService = listGenresService;
		this.updateGenreService = updateGenreService;
	}

	public async addGenre(req: AddGenreRequest): Promise<AddGenreResponse> {
		return await this.addGenreService.execute(req);
	}

	public async deleteGenre(req: DeleteGenreRequest): Promise<DeleteGenreResponse> {
		return await this.deleteGenreService.execute(req);
	}

	public async getGenre(req: GetGenreRequest): Promise<GetGenreResponse> {
		return await this.getGenreService.execute(req);
	}

	public async listGenres(req: ListGenresRequest): Promise<ListGenresResponse> {
		return await this.listGenresService.execute(req);
	}

	public async updateGenre(req: UpdateGenreRequest): Promise<UpdateGenreResponse> {
		return await this.updateGenreService.execute(req);
	}
}
