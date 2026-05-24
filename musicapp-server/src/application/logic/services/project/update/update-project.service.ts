import { ProjectRepository } from "../../../../../infrastructure/data-access/repositories/project.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { UpdateProjectRequestMapper } from "../../../mappers/request-mappers/update-project.request-mapper.ts";
import { UpdateProjectResponseMapper } from "../../../mappers/response-mappers/update-project.response-mapper.ts";
import { UpdateProjectRequest } from "./update-project.request.ts";
import { UpdateProjectResponse } from "./update-project.response.ts";

export class UpdateProjectService extends BaseService<UpdateProjectRequest, UpdateProjectResponse> {
	private readonly repo;
	private readonly reqMapper = new UpdateProjectRequestMapper();
	private readonly resMapper = new UpdateProjectResponseMapper();

	constructor(repo: ProjectRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(
		req: UpdateProjectRequest,
	): Promise<UpdateProjectResponse> {
		const model = this.reqMapper.map(req);

		const updatedModel = await this.repo.update(model);

		return this.resMapper.map(updatedModel);
	}
}
