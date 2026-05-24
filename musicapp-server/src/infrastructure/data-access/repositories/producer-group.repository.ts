import { DataSource } from "typeorm";
import { ProducerGroupModel } from "../../../domain/models/producer-group.model.ts";
import { Repository } from "../../common/data-access/repositories/repository.ts";
import { ProducerGroupEntityMapper } from "../../logic/mappers/producer-group.entity-mapper.ts";
import { ProducerGroupEntity } from "../entities/producer-group.entity.ts";

export class ProducerGroupRepository
    extends Repository<
        ProducerGroupModel,
        ProducerGroupEntity,
        ProducerGroupEntityMapper,
        DataSource
    > {
    constructor(dataSource: DataSource) {
        super(dataSource, ProducerGroupEntity, new ProducerGroupEntityMapper());
    }

    protected override async findOneById(
        id: number,
    ): Promise<ProducerGroupEntity | null> {
        return await this.repo.findOneBy({ producerGroupId: id });
    }
}
