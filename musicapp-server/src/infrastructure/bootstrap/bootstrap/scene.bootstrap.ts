import { DataSource } from "typeorm";
import { SceneController } from "../../../api/controllers/scene.controller.ts";
import { AddSceneService } from "../../../application/logic/services/scene/add/add-scene.service.ts";
import { DeleteSceneService } from "../../../application/logic/services/scene/delete/delete-scene.service.ts";
import { GetSceneService } from "../../../application/logic/services/scene/get/get-scene.service.ts";
import { ListScenesService } from "../../../application/logic/services/scene/list/list-scenes.service.ts";
import { UpdateSceneService } from "../../../application/logic/services/scene/update/update-scene.service.ts";
import { SceneRepository } from "../../data-access/repositories/scene.repository.ts";

export function bootstrapScene(dataSource: DataSource): SceneController {
	const repo = new SceneRepository(dataSource);

	return new SceneController(
		new AddSceneService(repo),
		new DeleteSceneService(repo),
		new GetSceneService(repo),
		new ListScenesService(repo),
		new UpdateSceneService(repo),
	);
}
