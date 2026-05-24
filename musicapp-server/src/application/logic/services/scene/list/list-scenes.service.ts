import { SceneRepository } from "../../../../../infrastructure/data-access/repositories/scene.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { ListScenesResponseMapper } from "../../../mappers/response-mappers/list-scenes.response-mapper.ts";
import { ListScenesRequest } from "./list-scenes.request.ts";
import { ListScenesResponse } from "./list-scenes.response.ts";

export class ListScenesService extends BaseService<ListScenesRequest, ListScenesResponse> {
	private readonly repo;
	private readonly resMapper = new ListScenesResponseMapper();

	constructor(repo: SceneRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(
		_req: ListScenesRequest,
	): Promise<ListScenesResponse> {
		const models = await this.repo.list();

		return this.resMapper.map(models);
	}
}
