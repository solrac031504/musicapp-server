import { BaseIdModel } from "../common/models/base-id.model.ts";

export class ProducerGroupMembershipModel extends BaseIdModel { 
    producerGroupId!: number;

    producerId!: number;
}