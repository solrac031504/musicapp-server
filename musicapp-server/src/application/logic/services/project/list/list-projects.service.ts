import { ProjectRepository } from "../../../../../infrastructure/data-access/repositories/project.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { ListProjectsResponseMapper } from "../../../mappers/response-mappers/list-projects.response-mapper.ts";
import { ListProjectsRequest } from "./list-projects.request.ts";
import { ListProjectsResponse } from "./list-projects.response.ts";

export class ListProjectsService extends BaseService<ListProjectsRequest, ListProjectsResponse> {
	private readonly repo;
	private readonly resMapper = new ListProjectsResponseMapper();

	constructor(repo: ProjectRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(
		_req: ListProjectsRequest,
	): Promise<ListProjectsResponse> {
		const models = await this.repo.list();

		return this.resMapper.map(models);
	}
}
