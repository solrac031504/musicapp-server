import { SongModel } from "../../../domain/models/song.model.ts";
import { EntityMapper } from "../../common/mappers/entity-mapper.ts";
import { SongEntity } from "../../data-access/entities/song.entity.ts";

export class SongEntityMapper extends EntityMapper<SongModel, SongEntity> {
    public override toModel(entity: SongEntity): SongModel {
        return {
            id: entity.songId,
            songName: entity.songName,
            artistGroupId: entity.artistGroupId,
            projectId: entity.projectId,
            producerGroupId: entity.producerGroupId,
            genreId: entity.genreId,
            sceneId: entity.sceneId,
            streamingServiceId: entity.streamingServiceId,
            duration: entity.duration,
            rating: entity.rating,
            isAdded: entity.isAdded,
            isLocalFile: entity.isLocalFile,
        } as SongModel;
    }

    public override fromModel(model: SongModel): SongEntity {
        return {
            songId: model.id,
            songName: model.songName,
            artistGroupId: model.artistGroupId,
            projectId: model.projectId,
            producerGroupId: model.producerGroupId,
            genreId: model.genreId,
            sceneId: model.sceneId,
            streamingServiceId: model.streamingServiceId,
            duration: model.duration,
            rating: model.rating,
            isAdded: model.isAdded,
            isLocalFile: model.isLocalFile,
        } as SongEntity;
    }
}
