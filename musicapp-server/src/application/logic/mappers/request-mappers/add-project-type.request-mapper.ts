import { ProjectTypeModel } from "../../../../domain/models/project-type.model.ts";
import { BaseRequestMapper } from "../../../common/mappers/base-request-mapper.ts";
import { AddProjectTypeRequest } from "../../services/project-type/add/add-project-type.request.ts";

export class AddProjectTypeRequestMapper extends BaseRequestMapper<AddProjectTypeRequest, ProjectTypeModel> {
    public override map(req: AddProjectTypeRequest): ProjectTypeModel {
        return {
            id: req.item.id,
            projectTypeName: req.item.projectTypeName,
            createdBy: req.item.createdBy,
            modifiedBy: req.item.modifiedBy,
        } as ProjectTypeModel;
    }
}
