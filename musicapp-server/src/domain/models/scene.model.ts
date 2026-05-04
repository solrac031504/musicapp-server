import { BaseIdModel } from "../common/models/base-id.model.ts";

export class SceneModel extends BaseIdModel {
    sceneName!: string;

    description!: string;

    isGeographic!: boolean;
}