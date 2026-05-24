import { ProjectRepository } from "../../../../../infrastructure/data-access/repositories/project.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { DeleteProjectRequest } from "./delete-project.request.ts";
import { DeleteProjectResponse } from "./delete-project.response.ts";

export class DeleteProjectService
    extends BaseService<DeleteProjectRequest, DeleteProjectResponse> {
    private readonly repo;

    constructor(repo: ProjectRepository) {
        super();
        this.repo = repo;
    }

    override async execute(
        req: DeleteProjectRequest,
    ): Promise<DeleteProjectResponse> {
        await this.repo.delete(req.id);

        return new DeleteProjectResponse();
    }
}
