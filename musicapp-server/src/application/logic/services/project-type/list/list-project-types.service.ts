import { ProjectTypeRepository } from "../../../../../infrastructure/data-access/repositories/project-type.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { ListProjectTypesResponseMapper } from "../../../mappers/response-mappers/list-project-types.response-mapper.ts";
import { ListProjectTypesRequest } from "./list-project-types.request.ts";
import { ListProjectTypesResponse } from "./list-project-types.response.ts";

export class ListProjectTypesService extends BaseService<ListProjectTypesRequest, ListProjectTypesResponse> {
	private readonly repo;
	private readonly resMapper = new ListProjectTypesResponseMapper();

	constructor(repo: ProjectTypeRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(_req: ListProjectTypesRequest): Promise<ListProjectTypesResponse> {
		const models = await this.repo.list();

		return this.resMapper.map(models);
	}
}
