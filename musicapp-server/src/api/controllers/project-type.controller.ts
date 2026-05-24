import { AddProjectTypeRequest } from "../../application/logic/services/project-type/add/add-project-type.request.ts";
import { AddProjectTypeResponse } from "../../application/logic/services/project-type/add/add-project-type.response.ts";
import { AddProjectTypeService } from "../../application/logic/services/project-type/add/add-project-type.service.ts";
import { DeleteProjectTypeRequest } from "../../application/logic/services/project-type/delete/delete-project-type.request.ts";
import { DeleteProjectTypeResponse } from "../../application/logic/services/project-type/delete/delete-project-type.response.ts";
import { DeleteProjectTypeService } from "../../application/logic/services/project-type/delete/delete-project-type.service.ts";
import { GetProjectTypeRequest } from "../../application/logic/services/project-type/get/get-project-type.request.ts";
import { GetProjectTypeResponse } from "../../application/logic/services/project-type/get/get-project-type.response.ts";
import { GetProjectTypeService } from "../../application/logic/services/project-type/get/get-project-type.service.ts";
import { ListProjectTypesRequest } from "../../application/logic/services/project-type/list/list-project-types.request.ts";
import { ListProjectTypesResponse } from "../../application/logic/services/project-type/list/list-project-types.response.ts";
import { ListProjectTypesService } from "../../application/logic/services/project-type/list/list-project-types.service.ts";
import { UpdateProjectTypeRequest } from "../../application/logic/services/project-type/update/update-project-type.request.ts";
import { UpdateProjectTypeResponse } from "../../application/logic/services/project-type/update/update-project-type.response.ts";
import { UpdateProjectTypeService } from "../../application/logic/services/project-type/update/update-project-type.service.ts";

export class ProjectTypeController {
	private readonly addProjectTypeService;
	private readonly deleteProjectTypeService;
	private readonly getProjectTypeService;
	private readonly listProjectTypesService;
	private readonly updateProjectTypeService;

	constructor(
		addProjectTypeService: AddProjectTypeService,
		deleteProjectTypeService: DeleteProjectTypeService,
		getProjectTypeService: GetProjectTypeService,
		listProjectTypesService: ListProjectTypesService,
		updateProjectTypeService: UpdateProjectTypeService,
	) {
		this.addProjectTypeService = addProjectTypeService;
		this.deleteProjectTypeService = deleteProjectTypeService;
		this.getProjectTypeService = getProjectTypeService;
		this.listProjectTypesService = listProjectTypesService;
		this.updateProjectTypeService = updateProjectTypeService;
	}

	public async addProjectType(req: AddProjectTypeRequest): Promise<AddProjectTypeResponse> {
		return await this.addProjectTypeService.execute(req);
	}

	public async deleteProjectType(req: DeleteProjectTypeRequest): Promise<DeleteProjectTypeResponse> {
		return await this.deleteProjectTypeService.execute(req);
	}

	public async getProjectType(req: GetProjectTypeRequest): Promise<GetProjectTypeResponse> {
		return await this.getProjectTypeService.execute(req);
	}

	public async listProjectTypes(req: ListProjectTypesRequest): Promise<ListProjectTypesResponse> {
		return await this.listProjectTypesService.execute(req);
	}

	public async updateProjectType(req: UpdateProjectTypeRequest): Promise<UpdateProjectTypeResponse> {
		return await this.updateProjectTypeService.execute(req);
	}
}
