import { AddSongRequest } from "../../application/logic/services/song/add/add-song.request.ts";
import { AddSongResponse } from "../../application/logic/services/song/add/add-song.response.ts";
import { AddSongService } from "../../application/logic/services/song/add/add-song.service.ts";
import { DeleteSongRequest } from "../../application/logic/services/song/delete/delete-song.request.ts";
import { DeleteSongResponse } from "../../application/logic/services/song/delete/delete-song.response.ts";
import { DeleteSongService } from "../../application/logic/services/song/delete/delete-song.service.ts";
import { GetSongRequest } from "../../application/logic/services/song/get/get-song.request.ts";
import { GetSongResponse } from "../../application/logic/services/song/get/get-song.response.ts";
import { GetSongService } from "../../application/logic/services/song/get/get-song.service.ts";
import { ListSongsRequest } from "../../application/logic/services/song/list/list-songs.request.ts";
import { ListSongsResponse } from "../../application/logic/services/song/list/list-songs.response.ts";
import { ListSongsService } from "../../application/logic/services/song/list/list-songs.service.ts";
import { UpdateSongRequest } from "../../application/logic/services/song/update/update-song.request.ts";
import { UpdateSongResponse } from "../../application/logic/services/song/update/update-song.response.ts";
import { UpdateSongService } from "../../application/logic/services/song/update/update-song.service.ts";

export class SongController {
	private readonly addSongService;
	private readonly deleteSongService;
	private readonly getSongService;
	private readonly listSongService;
	private readonly updateSongService;

	constructor(
		addSongService: AddSongService,
		deleteSongService: DeleteSongService,
		getSongService: GetSongService,
		listSongService: ListSongsService,
		updateSongService: UpdateSongService,
	) {
		this.addSongService = addSongService;
		this.deleteSongService = deleteSongService;
		this.getSongService = getSongService;
		this.listSongService = listSongService;
		this.updateSongService = updateSongService;
	}

	// Add song
	public async addSong(req: AddSongRequest): Promise<AddSongResponse> {
		return await this.addSongService.execute(req);
	}

	// Delete song
	public async deleteSong(req: DeleteSongRequest): Promise<DeleteSongResponse> {
		return await this.deleteSongService.execute(req);
	}

	// Get song
	public async getSong(req: GetSongRequest): Promise<GetSongResponse> {
		return await this.getSongService.execute(req);
	}

	// List songs
	public async listSong(req: ListSongsRequest): Promise<ListSongsResponse> {
		return await this.listSongService.execute(req);
	}

	// Update song
	public async updateSong(req: UpdateSongRequest): Promise<UpdateSongResponse> {
		return await this.updateSongService.execute(req);
	}
}
