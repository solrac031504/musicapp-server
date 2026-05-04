import { BaseIdModel } from "../common/models/base-id.model.ts";

export class ProducerModel extends BaseIdModel {
    producerName!: string;

    isActive!: boolean;
}