import { ProjectRepository } from "../../../../../infrastructure/data-access/repositories/project.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { GetProjectResponseMapper } from "../../../mappers/response-mappers/get-project.response-mapper.ts";
import { GetProjectRequest } from "./get-project.request.ts";
import { GetProjectResponse } from "./get-project.response.ts";

export class GetProjectService extends BaseService<GetProjectRequest, GetProjectResponse> {
	private readonly repo;
	private readonly resMapper = new GetProjectResponseMapper();

	constructor(repo: ProjectRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(
		req: GetProjectRequest,
	): Promise<GetProjectResponse> {
		const projectModel = await this.repo.getById(req.id);

		if (!projectModel) return new GetProjectResponse().notFound();

		return this.resMapper.map(projectModel!);
	}
}
