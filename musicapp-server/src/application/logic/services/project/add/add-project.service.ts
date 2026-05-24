import { ProjectRepository } from "../../../../../infrastructure/data-access/repositories/project.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { AddProjectRequestMapper } from "../../../mappers/request-mappers/add-project.request-mapper.ts";
import { AddProjectResponseMapper } from "../../../mappers/response-mappers/add-project.response-mapper.ts";
import { AddProjectRequest } from "../add/add-project.request.ts";
import { AddProjectResponse } from "../add/add-project.response.ts";

export class AddProjectService extends BaseService<AddProjectRequest, AddProjectResponse> {
	private readonly repo;
	private readonly reqMapper = new AddProjectRequestMapper();
	private readonly resMapper = new AddProjectResponseMapper();

	constructor(repo: ProjectRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(
		req: AddProjectRequest,
	): Promise<AddProjectResponse> {
		const model = this.reqMapper.map(req);

		const addedModel = await this.repo.add(model);

		return this.resMapper.map(addedModel);
	}
}
