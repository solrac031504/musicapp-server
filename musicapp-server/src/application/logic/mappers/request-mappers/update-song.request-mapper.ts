import { SongModel } from "../../../../domain/models/song.model.ts";
import { BaseRequestMapper } from "../../../common/mappers/base-request-mapper.ts";
import { UpdateSongRequest } from "../../services/song/update/update-song.request.ts";

export class UpdateSongRequestMapper extends BaseRequestMapper<UpdateSongRequest, SongModel> {
	public override map(req: UpdateSongRequest): SongModel {
		return {
			id: req.item.id,
			songName: req.item.songName,
			artistGroupId: req.item.artistGroupId,
			projectId: req.item.projectId,
			producerGroupId: req.item.producerGroupId,
			genreId: req.item.genreId,
			sceneId: req.item.sceneId,
			streamingServiceId: req.item.streamingServiceId,
			duration: req.item.duration,
			rating: req.item.rating,
			isAdded: req.item.isAdded,
			isLocalFile: req.item.isLocalFile,
			createdBy: req.item.createdBy,
			modifiedBy: req.item.modifiedBy,
		} as SongModel;
	}
}
