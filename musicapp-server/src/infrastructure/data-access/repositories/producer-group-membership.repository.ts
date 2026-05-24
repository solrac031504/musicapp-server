import { DataSource } from "typeorm";
import { ProducerGroupMembershipModel } from "../../../domain/models/producer-group-membership.model.ts";
import { Repository } from "../../common/data-access/repositories/repository.ts";
import { ProducerGroupMembershipEntityMapper } from "../../logic/mappers/producer-group-membership.entity-mapper.ts";
import { ProducerGroupMembershipEntity } from "../entities/producer-group-membership.entity.ts";

export class ProducerGroupMembershipRepository
    extends Repository<
        ProducerGroupMembershipModel,
        ProducerGroupMembershipEntity,
        ProducerGroupMembershipEntityMapper,
        DataSource
    > {
    constructor(dataSource: DataSource) {
        super(
            dataSource,
            ProducerGroupMembershipEntity,
            new ProducerGroupMembershipEntityMapper(),
        );
    }

    protected override async findOneById(
        id: number,
    ): Promise<ProducerGroupMembershipEntity | null> {
        return await this.repo.findOneBy({ producerGroupMembershipId: id });
    }
}
