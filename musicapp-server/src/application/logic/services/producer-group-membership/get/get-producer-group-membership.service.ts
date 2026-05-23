import { ProducerGroupMembershipRepository } from "../../../../../infrastructure/data-access/repositories/producer-group-membership.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { ProducerGroupMembershipDTO } from "../../../../dto/producer-group-membership.dto.ts";
import { GetProducerGroupMembershipRequest } from "./get-producer-group-membership.request.ts";
import { GetProducerGroupMembershipResponse } from "./get-producer-group-membership.response.ts";

export { GetProducerGroupMembershipRequest } from "./get-producer-group-membership.request.ts";
export { GetProducerGroupMembershipResponse } from "./get-producer-group-membership.response.ts";

export class GetProducerGroupMembershipService extends BaseService<GetProducerGroupMembershipRequest, GetProducerGroupMembershipResponse> {
    private readonly repo;

    constructor(repo: ProducerGroupMembershipRepository) {
        super();
        this.repo = repo;
    }

    public override async execute(
        req: GetProducerGroupMembershipRequest,
    ): Promise<GetProducerGroupMembershipResponse> {
        const model = await this.repo.getById(req.id);

        if (!model) return new GetProducerGroupMembershipResponse().notFound();

        return new GetProducerGroupMembershipResponse(new ProducerGroupMembershipDTO(model));
    }
}
