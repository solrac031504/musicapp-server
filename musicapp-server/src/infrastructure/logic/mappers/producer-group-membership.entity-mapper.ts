import { ProducerGroupMembershipModel } from "../../../domain/models/producer-group-membership.model.ts";
import { EntityMapper } from "../../common/mappers/entity-mapper.ts";
import { ProducerGroupMembershipEntity } from "../../data-access/entities/producer-group-membership.entity.ts";

export class ProducerGroupMembershipEntityMapper extends EntityMapper<ProducerGroupMembershipModel, ProducerGroupMembershipEntity> {
    public override toModel(entity: ProducerGroupMembershipEntity): ProducerGroupMembershipModel {
        return {
            groupId: entity.producerGroupId,
            memberId: entity.producerId
        } as ProducerGroupMembershipModel
    }

    public override fromModel(model: ProducerGroupMembershipModel): ProducerGroupMembershipEntity {
        return {
            producerGroupId: model.groupId,
            producerId: model.memberId
        } as ProducerGroupMembershipEntity
    }
}