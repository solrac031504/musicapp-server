import { SceneRepository } from "../../../../../infrastructure/data-access/repositories/scene.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { DeleteSceneRequest } from "./delete-scene.request.ts";
import { DeleteSceneResponse } from "./delete-scene.response.ts";

export class DeleteSceneService extends BaseService<DeleteSceneRequest, DeleteSceneResponse> {
	private readonly repo;

	constructor(repo: SceneRepository) {
		super();
		this.repo = repo;
	}

	override async execute(
		req: DeleteSceneRequest,
	): Promise<DeleteSceneResponse> {
		await this.repo.delete(req.id);

		return new DeleteSceneResponse();
	}
}
