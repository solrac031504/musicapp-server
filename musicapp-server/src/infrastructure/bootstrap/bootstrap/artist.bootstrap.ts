import { DataSource } from "typeorm";
import { ArtistController } from "../../../api/controllers/artist.controller.ts";
import { AddArtistService } from "../../../application/logic/services/artist/add/add-artist.service.ts";
import { DeleteArtistService } from "../../../application/logic/services/artist/delete/delete-artist.service.ts";
import { GetArtistService } from "../../../application/logic/services/artist/get/get-artist.service.ts";
import { ListArtistsService } from "../../../application/logic/services/artist/list/list-artists.service.ts";
import { UpdateArtistService } from "../../../application/logic/services/artist/update/update-artist.service.ts";
import { ArtistRepository } from "../../data-access/repositories/artist.repository.ts";

export function bootstrapArtist(dataSource: DataSource): ArtistController {
	const repo = new ArtistRepository(dataSource);

	return new ArtistController(
		new AddArtistService(repo),
		new DeleteArtistService(repo),
		new GetArtistService(repo),
		new ListArtistsService(repo),
		new UpdateArtistService(repo),
	);
}
