import { DataSource } from "typeorm";
import { ProjectTypeController } from "../../../api/controllers/project-type.controller.ts";
import { AddProjectTypeService } from "../../../application/logic/services/project-type/add/add-project-type.service.ts";
import { DeleteProjectTypeService } from "../../../application/logic/services/project-type/delete/delete-project-type.service.ts";
import { GetProjectTypeService } from "../../../application/logic/services/project-type/get/get-project-type.service.ts";
import { ListProjectTypesService } from "../../../application/logic/services/project-type/list/list-project-types.service.ts";
import { UpdateProjectTypeService } from "../../../application/logic/services/project-type/update/update-project-type.service.ts";
import { ProjectTypeRepository } from "../../data-access/repositories/project-type.repository.ts";

export function bootstrapProjectType(dataSource: DataSource): ProjectTypeController {
	const repo = new ProjectTypeRepository(dataSource);

	return new ProjectTypeController(
		new AddProjectTypeService(repo),
		new DeleteProjectTypeService(repo),
		new GetProjectTypeService(repo),
		new ListProjectTypesService(repo),
		new UpdateProjectTypeService(repo),
	);
}
