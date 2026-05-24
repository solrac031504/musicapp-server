import { SceneRepository } from "../../../../../infrastructure/data-access/repositories/scene.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { UpdateSceneRequestMapper } from "../../../mappers/request-mappers/update-scene.request-mapper.ts";
import { UpdateSceneResponseMapper } from "../../../mappers/response-mappers/update-scene.response-mapper.ts";
import { UpdateSceneRequest } from "./update-scene.request.ts";
import { UpdateSceneResponse } from "./update-scene.response.ts";

export class UpdateSceneService extends BaseService<UpdateSceneRequest, UpdateSceneResponse> {
	private readonly repo;
	private readonly reqMapper = new UpdateSceneRequestMapper();
	private readonly resMapper = new UpdateSceneResponseMapper();

	constructor(repo: SceneRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(
		req: UpdateSceneRequest,
	): Promise<UpdateSceneResponse> {
		const model = this.reqMapper.map(req);

		const updatedModel = await this.repo.update(model);

		return this.resMapper.map(updatedModel);
	}
}
