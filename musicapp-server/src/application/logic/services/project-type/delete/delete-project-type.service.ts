import { ProjectTypeRepository } from "../../../../../infrastructure/data-access/repositories/project-type.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { DeleteProjectTypeRequest } from "./delete-project-type.request.ts";
import { DeleteProjectTypeResponse } from "./delete-project-type.response.ts";

export class DeleteProjectTypeService extends BaseService<DeleteProjectTypeRequest, DeleteProjectTypeResponse> {
    private readonly repo;

    constructor(repo: ProjectTypeRepository) {
        super();
        this.repo = repo;
    }

    public override async execute(
        req: DeleteProjectTypeRequest,
    ): Promise<DeleteProjectTypeResponse> {
        await this.repo.delete(req.id);

        return new DeleteProjectTypeResponse();
    }
}
