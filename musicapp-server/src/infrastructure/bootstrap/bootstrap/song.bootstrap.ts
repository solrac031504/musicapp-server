import { DataSource } from "typeorm";
import { SongController } from "../../../api/controllers/song.controller.ts";
import { AddSongService } from "../../../application/logic/services/song/add/add-song.service.ts";
import { DeleteSongService } from "../../../application/logic/services/song/delete/delete-song.service.ts";
import { GetSongService } from "../../../application/logic/services/song/get/get-song.service.ts";
import { ListSongsService } from "../../../application/logic/services/song/list/list-songs.service.ts";
import { UpdateSongService } from "../../../application/logic/services/song/update/update-song.service.ts";
import { SongRepository } from "../../data-access/repositories/song.repository.ts";

export function bootstrapSong(dataSource: DataSource): SongController {
	const repo = new SongRepository(dataSource);

	return new SongController(
		new AddSongService(repo),
		new DeleteSongService(repo),
		new GetSongService(repo),
		new ListSongsService(repo),
		new UpdateSongService(repo),
	);
}
