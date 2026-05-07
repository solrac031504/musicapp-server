import { ProducerModel } from "../../../domain/models/producer.model.ts";
import { EntityMapper } from "../../common/mappers/entity-mapper.ts";
import { ProducerEntity } from "../../data-access/entities/producer.entity.ts";

export class ProducerEntityMapper
    extends EntityMapper<ProducerModel, ProducerEntity> {
    public override toModel(entity: ProducerEntity): ProducerModel {
        return {
            id: entity.producerId,
            producerName: entity.producerName,
            isActive: entity.isActive,
        } as ProducerModel;
    }

    public override fromModel(model: ProducerModel): ProducerEntity {
        return {
            producerId: model.id,
            producerName: model.producerName,
            isActive: model.isActive,
        } as ProducerEntity;
    }
}
