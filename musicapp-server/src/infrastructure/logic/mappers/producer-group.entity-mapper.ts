import { ProducerGroupModel } from "../../../domain/models/producer-group.model.ts";
import { EntityMapper } from "../../common/mappers/entity-mapper.ts";
import { ProducerGroupEntity } from "../../data-access/entities/producer-group.entity.ts";

export class ProducerGroupEntityMapper extends EntityMapper<ProducerGroupModel, ProducerGroupEntity> {
	public override toModel(entity: ProducerGroupEntity): ProducerGroupModel {
		return {
			id: entity.producerGroupId,
			producerGroupName: entity.producerGroupName,
			isActive: entity.isActive,
			createdBy: entity.createdBy,
			modifiedBy: entity.modifiedBy,
		} as ProducerGroupModel;
	}

	public override fromModel(model: ProducerGroupModel): ProducerGroupEntity {
		return {
			producerGroupId: model.id,
			producerGroupName: model.producerGroupName,
			isActive: model.isActive,
			createdBy: model.createdBy,
			modifiedBy: model.modifiedBy,
		} as ProducerGroupEntity;
	}
}
