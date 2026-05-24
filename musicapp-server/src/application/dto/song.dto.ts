import { SongModel } from "../../domain/models/song.model.ts";
import { BaseIdDTO } from "../common/dto/base-id-dto.ts";

export class SongDTO extends BaseIdDTO {
	songName!: string;

	artistGroupId!: number;

	projectId!: number;

	producerGroupId!: number | null;

	genreId!: number;

	sceneId!: number;

	streamingServiceId!: number;

	duration!: number;

	rating!: number;

	isAdded!: boolean;

	isLocalFile!: boolean;

	createdBy: string = null!;

	modifiedBy: string | null = null;

	constructor(model: SongModel) {
		super();

		this.id = model.id;
		this.songName = model.songName;
		this.artistGroupId = model.artistGroupId;
		this.projectId = model.projectId;
		this.producerGroupId = model.producerGroupId;
		this.genreId = model.genreId;
		this.sceneId = model.sceneId;
		this.streamingServiceId = model.streamingServiceId;
		this.duration = model.duration;
		this.rating = model.rating;
		this.isAdded = model.isAdded;
		this.isLocalFile = model.isLocalFile;
		this.createdBy = model.createdBy;
		this.modifiedBy = model.modifiedBy;
	}
}
