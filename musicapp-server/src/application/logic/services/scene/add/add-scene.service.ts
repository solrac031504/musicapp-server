import { SceneRepository } from "../../../../../infrastructure/data-access/repositories/scene.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { AddSceneRequestMapper } from "../../../mappers/request-mappers/add-scene.request-mapper.ts";
import { AddSceneResponseMapper } from "../../../mappers/response-mappers/add-scene.response-mapper.ts";
import { AddSceneRequest } from "../add/add-scene.request.ts";
import { AddSceneResponse } from "../add/add-scene.response.ts";

export class AddSceneService extends BaseService<AddSceneRequest, AddSceneResponse> {
	private readonly repo;
	private readonly reqMapper = new AddSceneRequestMapper();
	private readonly resMapper = new AddSceneResponseMapper();

	constructor(repo: SceneRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(
		req: AddSceneRequest,
	): Promise<AddSceneResponse> {
		const model = this.reqMapper.map(req);

		const addedModel = await this.repo.add(model);

		return this.resMapper.map(addedModel);
	}
}
