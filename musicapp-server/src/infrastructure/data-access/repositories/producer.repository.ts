import { DataSource } from "typeorm";
import { ProducerModel } from "../../../domain/models/producer.model.ts";
import { Repository } from "../../common/data-access/repositories/repository.ts";
import { ProducerEntityMapper } from "../../logic/mappers/producer.entity-mapper.ts";
import { ProducerEntity } from "../entities/producer.entity.ts";

export class ProducerRepository
    extends Repository<
        ProducerModel,
        ProducerEntity,
        ProducerEntityMapper,
        DataSource
    > {
    constructor(dataSource: DataSource) {
        super(dataSource, ProducerEntity, new ProducerEntityMapper());
    }

    protected override async findOneById(
        id: number,
    ): Promise<ProducerEntity | null> {
        return await this.repo.findOneBy({ producerId: id });
    }
}
