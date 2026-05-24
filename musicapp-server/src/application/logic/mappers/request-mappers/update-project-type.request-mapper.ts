import { ProjectTypeModel } from "../../../../domain/models/project-type.model.ts";
import { BaseRequestMapper } from "../../../common/mappers/base-request-mapper.ts";
import { UpdateProjectTypeRequest } from "../../services/project-type/update/update-project-type.request.ts";

export class UpdateProjectTypeRequestMapper extends BaseRequestMapper<UpdateProjectTypeRequest, ProjectTypeModel> {
	public override map(req: UpdateProjectTypeRequest): ProjectTypeModel {
		return {
			id: req.item.id,
			projectTypeName: req.item.projectTypeName,
			createdBy: req.item.createdBy,
			modifiedBy: req.item.modifiedBy,
		} as ProjectTypeModel;
	}
}
