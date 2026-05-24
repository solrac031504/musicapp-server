import { StreamingServiceModel } from "../../../domain/models/streaming-service.model.ts";
import { EntityMapper } from "../../common/mappers/entity-mapper.ts";
import { StreamingServiceEntity } from "../../data-access/entities/streaming-service.entity.ts";

export class StreamingServiceEntityMapper extends EntityMapper<StreamingServiceModel, StreamingServiceEntity> {
	public override toModel(
		entity: StreamingServiceEntity,
	): StreamingServiceModel {
		return {
			id: entity.streamingServiceId,
			streamingServiceName: entity.streamingServiceName,
			createdBy: entity.createdBy,
			modifiedBy: entity.modifiedBy,
		} as StreamingServiceModel;
	}

	public override fromModel(
		model: StreamingServiceModel,
	): StreamingServiceEntity {
		return {
			streamingServiceId: model.id,
			streamingServiceName: model.streamingServiceName,
			createdBy: model.createdBy,
			modifiedBy: model.modifiedBy,
		} as StreamingServiceEntity;
	}
}
