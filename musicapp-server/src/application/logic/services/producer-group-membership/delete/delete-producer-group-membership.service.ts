import { ProducerGroupMembershipRepository } from "../../../../../infrastructure/data-access/repositories/producer-group-membership.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { DeleteProducerGroupMembershipRequest } from "./delete-producer-group-membership.request.ts";
import { DeleteProducerGroupMembershipResponse } from "./delete-producer-group-membership.response.ts";

export { DeleteProducerGroupMembershipRequest } from "./delete-producer-group-membership.request.ts";
export { DeleteProducerGroupMembershipResponse } from "./delete-producer-group-membership.response.ts";

export class DeleteProducerGroupMembershipService extends BaseService<DeleteProducerGroupMembershipRequest, DeleteProducerGroupMembershipResponse> {
    private readonly repo;

    constructor(repo: ProducerGroupMembershipRepository) {
        super();
        this.repo = repo;
    }

    public override async execute(
        req: DeleteProducerGroupMembershipRequest,
    ): Promise<DeleteProducerGroupMembershipResponse> {
        await this.repo.delete(req.id);

        return new DeleteProducerGroupMembershipResponse();
    }
}
