import { BaseIdModel } from "../common/models/base-id.model.ts";

export class ProjectModel extends BaseIdModel {
    projectName!: string;

    artistGroupId!: number;

    sceneId!: number | null;

    projectTypeId!: number;

    releaseDate!: Date;

    rating!: number;
}