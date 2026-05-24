import { ProjectModel } from "../../../../domain/models/project.model.ts";
import { BaseRequestMapper } from "../../../common/mappers/base-request-mapper.ts";
import { UpdateProjectRequest } from "../../services/project/update/update-project.request.ts";

export class UpdateProjectRequestMapper extends BaseRequestMapper<UpdateProjectRequest, ProjectModel> {
	public override map(req: UpdateProjectRequest): ProjectModel {
		return {
			id: req.item.id,
			projectName: req.item.projectName,
			artistGroupId: req.item.artistGroupId,
			sceneId: req.item.sceneId,
			projectTypeId: req.item.projectTypeId,
			releaseDate: req.item.releaseDate,
			rating: req.item.rating,
			createdBy: req.item.createdBy,
			modifiedBy: req.item.modifiedBy,
		} as ProjectModel;
	}
}
