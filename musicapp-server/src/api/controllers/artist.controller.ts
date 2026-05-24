import { AddArtistRequest } from "../../application/logic/services/artist/add/add-artist.request.ts";
import { AddArtistResponse } from "../../application/logic/services/artist/add/add-artist.response.ts";
import { AddArtistService } from "../../application/logic/services/artist/add/add-artist.service.ts";
import { DeleteArtistRequest } from "../../application/logic/services/artist/delete/delete-artist.request.ts";
import { DeleteArtistResponse } from "../../application/logic/services/artist/delete/delete-artist.response.ts";
import { DeleteArtistService } from "../../application/logic/services/artist/delete/delete-artist.service.ts";
import { GetArtistRequest } from "../../application/logic/services/artist/get/get-artist.request.ts";
import { GetArtistResponse } from "../../application/logic/services/artist/get/get-artist.response.ts";
import { GetArtistService } from "../../application/logic/services/artist/get/get-artist.service.ts";
import { ListArtistsRequest } from "../../application/logic/services/artist/list/list-artists.request.ts";
import { ListArtistsResponse } from "../../application/logic/services/artist/list/list-artists.response.ts";
import { ListArtistsService } from "../../application/logic/services/artist/list/list-artists.service.ts";
import { UpdateArtistRequest } from "../../application/logic/services/artist/update/update-artist.request.ts";
import { UpdateArtistResponse } from "../../application/logic/services/artist/update/update-artist.response.ts";
import { UpdateArtistService } from "../../application/logic/services/artist/update/update-artist.service.ts";

export class ArtistController {
	private readonly addArtistService;
	private readonly deleteArtistService;
	private readonly getArtistService;
	private readonly listArtistService;
	private readonly updateArtistService;

	constructor(
		addArtistService: AddArtistService,
		deleteArtistService: DeleteArtistService,
		getArtistService: GetArtistService,
		listArtistService: ListArtistsService,
		updateArtistService: UpdateArtistService,
	) {
		this.addArtistService = addArtistService;
		this.deleteArtistService = deleteArtistService;
		this.getArtistService = getArtistService;
		this.listArtistService = listArtistService;
		this.updateArtistService = updateArtistService;
	}

	// Add artist
	public async addArtist(req: AddArtistRequest): Promise<AddArtistResponse> {
		return await this.addArtistService.execute(req);
	}

	// Delete artist
	public async deleteArtist(req: DeleteArtistRequest): Promise<DeleteArtistResponse> {
		return await this.deleteArtistService.execute(req);
	}

	// Get artist
	public async getArtist(req: GetArtistRequest): Promise<GetArtistResponse> {
		return await this.getArtistService.execute(req);
	}

	// List artists
	public async listArtist(req: ListArtistsRequest): Promise<ListArtistsResponse> {
		return await this.listArtistService.execute(req);
	}

	// Update artist
	public async updateArtist(req: UpdateArtistRequest): Promise<UpdateArtistResponse> {
		return await this.updateArtistService.execute(req);
	}
}
