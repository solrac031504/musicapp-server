import { ProducerGroupMembershipModel } from "../../../domain/models/producer-group-membership.model.ts";
import { EntityMapper } from "../../common/mappers/entity-mapper.ts";
import { ProducerGroupMembershipEntity } from "../../data-access/entities/producer-group-membership.entity.ts";

export class ProducerGroupMembershipEntityMapper extends EntityMapper<
	ProducerGroupMembershipModel,
	ProducerGroupMembershipEntity
> {
	public override toModel(
		entity: ProducerGroupMembershipEntity,
	): ProducerGroupMembershipModel {
		return {
			id: entity.producerGroupMembershipId,
			producerGroupId: entity.producerGroupId,
			producerId: entity.producerId,
			createdBy: entity.createdBy,
			modifiedBy: entity.modifiedBy,
		} as ProducerGroupMembershipModel;
	}

	public override fromModel(
		model: ProducerGroupMembershipModel,
	): ProducerGroupMembershipEntity {
		return {
			producerGroupMembershipId: model.id,
			producerGroupId: model.producerGroupId,
			producerId: model.producerId,
			createdBy: model.createdBy,
			modifiedBy: model.modifiedBy,
		} as ProducerGroupMembershipEntity;
	}
}
