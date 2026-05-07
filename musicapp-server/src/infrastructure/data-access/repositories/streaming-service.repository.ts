import { DataSource } from "typeorm";
import { StreamingServiceModel } from "../../../domain/models/streaming-service.model.ts";
import { Repository } from "../../common/data-access/repositories/repository.ts";
import { StreamingServiceEntityMapper } from "../../logic/mappers/streaming-service.entity-mapper.ts";
import { StreamingServiceEntity } from "../entities/streaming-service.entity.ts";

export class StreamingServiceRepository
    extends Repository<
        StreamingServiceModel,
        StreamingServiceEntity,
        StreamingServiceEntityMapper,
        DataSource
    > {
    constructor(dataSource: DataSource) {
        super(
            dataSource,
            StreamingServiceEntity,
            new StreamingServiceEntityMapper(),
        );
    }

    protected override async findOneById(
        id: number,
    ): Promise<StreamingServiceEntity | null> {
        return await this.repo.findOneBy({ streamingServiceId: id });
    }
}
