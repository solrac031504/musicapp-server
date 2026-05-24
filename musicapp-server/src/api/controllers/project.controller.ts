import { AddProjectRequest } from "../../application/logic/services/project/add/add-project.request.ts";
import { AddProjectResponse } from "../../application/logic/services/project/add/add-project.response.ts";
import { AddProjectService } from "../../application/logic/services/project/add/add-project.service.ts";
import { DeleteProjectRequest } from "../../application/logic/services/project/delete/delete-project.request.ts";
import { DeleteProjectResponse } from "../../application/logic/services/project/delete/delete-project.response.ts";
import { DeleteProjectService } from "../../application/logic/services/project/delete/delete-project.service.ts";
import { GetProjectRequest } from "../../application/logic/services/project/get/get-project.request.ts";
import { GetProjectResponse } from "../../application/logic/services/project/get/get-project.response.ts";
import { GetProjectService } from "../../application/logic/services/project/get/get-project.service.ts";
import { ListProjectsRequest } from "../../application/logic/services/project/list/list-projects.request.ts";
import { ListProjectsResponse } from "../../application/logic/services/project/list/list-projects.response.ts";
import { ListProjectsService } from "../../application/logic/services/project/list/list-projects.service.ts";
import { UpdateProjectRequest } from "../../application/logic/services/project/update/update-project.request.ts";
import { UpdateProjectResponse } from "../../application/logic/services/project/update/update-project.response.ts";
import { UpdateProjectService } from "../../application/logic/services/project/update/update-project.service.ts";

export class ProjectController {
	private readonly addProjectService;
	private readonly deleteProjectService;
	private readonly getProjectService;
	private readonly listProjectService;
	private readonly updateProjectService;

	constructor(
		addProjectService: AddProjectService,
		deleteProjectService: DeleteProjectService,
		getProjectService: GetProjectService,
		listProjectService: ListProjectsService,
		updateProjectService: UpdateProjectService,
	) {
		this.addProjectService = addProjectService;
		this.deleteProjectService = deleteProjectService;
		this.getProjectService = getProjectService;
		this.listProjectService = listProjectService;
		this.updateProjectService = updateProjectService;
	}

	// Add project
	public async addProject(req: AddProjectRequest): Promise<AddProjectResponse> {
		return await this.addProjectService.execute(req);
	}

	// Delete project
	public async deleteProject(req: DeleteProjectRequest): Promise<DeleteProjectResponse> {
		return await this.deleteProjectService.execute(req);
	}

	// Get project
	public async getProject(req: GetProjectRequest): Promise<GetProjectResponse> {
		return await this.getProjectService.execute(req);
	}

	// List projects
	public async listProject(req: ListProjectsRequest): Promise<ListProjectsResponse> {
		return await this.listProjectService.execute(req);
	}

	// Update project
	public async updateProject(req: UpdateProjectRequest): Promise<UpdateProjectResponse> {
		return await this.updateProjectService.execute(req);
	}
}
