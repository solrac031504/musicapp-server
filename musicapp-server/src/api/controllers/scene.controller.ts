import { AddSceneRequest } from "../../application/logic/services/scene/add/add-scene.request.ts";
import { AddSceneResponse } from "../../application/logic/services/scene/add/add-scene.response.ts";
import { AddSceneService } from "../../application/logic/services/scene/add/add-scene.service.ts";
import { DeleteSceneRequest } from "../../application/logic/services/scene/delete/delete-scene.request.ts";
import { DeleteSceneResponse } from "../../application/logic/services/scene/delete/delete-scene.response.ts";
import { DeleteSceneService } from "../../application/logic/services/scene/delete/delete-scene.service.ts";
import { GetSceneRequest } from "../../application/logic/services/scene/get/get-scene.request.ts";
import { GetSceneResponse } from "../../application/logic/services/scene/get/get-scene.response.ts";
import { GetSceneService } from "../../application/logic/services/scene/get/get-scene.service.ts";
import { ListScenesRequest } from "../../application/logic/services/scene/list/list-scenes.request.ts";
import { ListScenesResponse } from "../../application/logic/services/scene/list/list-scenes.response.ts";
import { ListScenesService } from "../../application/logic/services/scene/list/list-scenes.service.ts";
import { UpdateSceneRequest } from "../../application/logic/services/scene/update/update-scene.request.ts";
import { UpdateSceneResponse } from "../../application/logic/services/scene/update/update-scene.response.ts";
import { UpdateSceneService } from "../../application/logic/services/scene/update/update-scene.service.ts";

export class SceneController {
	private readonly addSceneService;
	private readonly deleteSceneService;
	private readonly getSceneService;
	private readonly listSceneService;
	private readonly updateSceneService;

	constructor(
		addSceneService: AddSceneService,
		deleteSceneService: DeleteSceneService,
		getSceneService: GetSceneService,
		listSceneService: ListScenesService,
		updateSceneService: UpdateSceneService,
	) {
		this.addSceneService = addSceneService;
		this.deleteSceneService = deleteSceneService;
		this.getSceneService = getSceneService;
		this.listSceneService = listSceneService;
		this.updateSceneService = updateSceneService;
	}

	// Add scene
	public async addScene(req: AddSceneRequest): Promise<AddSceneResponse> {
		return await this.addSceneService.execute(req);
	}

	// Delete scene
	public async deleteScene(req: DeleteSceneRequest): Promise<DeleteSceneResponse> {
		return await this.deleteSceneService.execute(req);
	}

	// Get scene
	public async getScene(req: GetSceneRequest): Promise<GetSceneResponse> {
		return await this.getSceneService.execute(req);
	}

	// List scenes
	public async listScene(req: ListScenesRequest): Promise<ListScenesResponse> {
		return await this.listSceneService.execute(req);
	}

	// Update scene
	public async updateScene(req: UpdateSceneRequest): Promise<UpdateSceneResponse> {
		return await this.updateSceneService.execute(req);
	}
}
