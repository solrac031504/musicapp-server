import { DataSource } from "typeorm";
import { ArtistGroupController } from "../../../api/controllers/artist-group.controller.ts";
import { AddArtistGroupService } from "../../../application/logic/services/artist-group/add/add-artist-group.service.ts";
import { DeleteArtistGroupService } from "../../../application/logic/services/artist-group/delete/delete-artist-group.service.ts";
import { GetArtistGroupService } from "../../../application/logic/services/artist-group/get/get-artist-group.service.ts";
import { ListArtistGroupsService } from "../../../application/logic/services/artist-group/list/list-artist-groups.service.ts";
import { UpdateArtistGroupService } from "../../../application/logic/services/artist-group/update/update-artist-group.service.ts";
import { ArtistGroupRepository } from "../../data-access/repositories/artist-group.repository.ts";

export function bootstrapArtistGroup(dataSource: DataSource): ArtistGroupController {
	const repo = new ArtistGroupRepository(dataSource);

	return new ArtistGroupController(
		new AddArtistGroupService(repo),
		new DeleteArtistGroupService(repo),
		new GetArtistGroupService(repo),
		new ListArtistGroupsService(repo),
		new UpdateArtistGroupService(repo),
	);
}
