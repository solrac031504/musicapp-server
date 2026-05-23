import { ProducerGroupMembershipRepository } from "../../../../../infrastructure/data-access/repositories/producer-group-membership.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { ProducerGroupMembershipDTO } from "../../../../dto/producer-group-membership.dto.ts";
import { ListProducerGroupMembershipRequest } from "./list-producer-group-membership.request.ts";
import { ListProducerGroupMembershipResponse } from "./list-producer-group-membership.response.ts";

export { ListProducerGroupMembershipRequest } from "./list-producer-group-membership.request.ts";
export { ListProducerGroupMembershipResponse } from "./list-producer-group-membership.response.ts";

export class ListProducerGroupMembershipService extends BaseService<ListProducerGroupMembershipRequest, ListProducerGroupMembershipResponse> {
    private readonly repo;

    constructor(repo: ProducerGroupMembershipRepository) {
        super();
        this.repo = repo;
    }

    public override async execute(
        req: ListProducerGroupMembershipRequest,
    ): Promise<ListProducerGroupMembershipResponse> {
        const models = await this.repo.list();

        return new ListProducerGroupMembershipResponse(models.map((model) => new ProducerGroupMembershipDTO(model)));
    }
}
