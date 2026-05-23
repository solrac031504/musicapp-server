import { BaseIdModel } from "../common/models/base-id.model.ts";

export class SongModel extends BaseIdModel {
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
}
