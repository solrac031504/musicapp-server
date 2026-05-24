import { DataSource } from "typeorm";
import { ProjectController } from "../../../api/controllers/project.controller.ts";
import { AddProjectService } from "../../../application/logic/services/project/add/add-project.service.ts";
import { DeleteProjectService } from "../../../application/logic/services/project/delete/delete-project.service.ts";
import { GetProjectService } from "../../../application/logic/services/project/get/get-project.service.ts";
import { ListProjectsService } from "../../../application/logic/services/project/list/list-projects.service.ts";
import { UpdateProjectService } from "../../../application/logic/services/project/update/update-project.service.ts";
import { ProjectRepository } from "../../data-access/repositories/project.repository.ts";

export function bootstrapProject(dataSource: DataSource): ProjectController {
	const repo = new ProjectRepository(dataSource);

	return new ProjectController(
		new AddProjectService(repo),
		new DeleteProjectService(repo),
		new GetProjectService(repo),
		new ListProjectsService(repo),
		new UpdateProjectService(repo),
	);
}
