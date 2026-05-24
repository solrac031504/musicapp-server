import { SceneRepository } from "../../../../../infrastructure/data-access/repositories/scene.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { GetSceneResponseMapper } from "../../../mappers/response-mappers/get-scene.response-mapper.ts";
import { GetSceneRequest } from "./get-scene.request.ts";
import { GetSceneResponse } from "./get-scene.response.ts";

export class GetSceneService extends BaseService<GetSceneRequest, GetSceneResponse> {
	private readonly repo;
	private readonly resMapper = new GetSceneResponseMapper();

	constructor(repo: SceneRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(
		req: GetSceneRequest,
	): Promise<GetSceneResponse> {
		const sceneModel = await this.repo.getById(req.id);

		if (!sceneModel) return new GetSceneResponse().notFound();

		return this.resMapper.map(sceneModel!);
	}
}
