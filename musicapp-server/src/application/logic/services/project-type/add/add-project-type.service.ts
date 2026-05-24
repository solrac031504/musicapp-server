import { ProjectTypeRepository } from "../../../../../infrastructure/data-access/repositories/project-type.repository.ts";
import { ProjectTypeModel } from "../../../../../domain/models/project-type.model.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { ProjectTypeDTO } from "../../../../dto/project-type.dto.ts";
import { AddProjectTypeRequest } from "./add-project-type.request.ts";
import { AddProjectTypeResponse } from "./add-project-type.response.ts";
import { AddProjectTypeRequestMapper } from "../../../mappers/request-mappers/add-project-type.request-mapper.ts";
import { AddProjectTypeResponseMapper } from "../../../mappers/response-mappers/add-project-type.response-mapper.ts";

export class AddProjectTypeService extends BaseService<AddProjectTypeRequest, AddProjectTypeResponse> {
    private readonly repo;
    private readonly reqMapper = new AddProjectTypeRequestMapper();
    private readonly resMapper = new AddProjectTypeResponseMapper();

    constructor(repo: ProjectTypeRepository) {
        super();
        this.repo = repo;
    }

    public override async execute(
        req: AddProjectTypeRequest,
    ): Promise<AddProjectTypeResponse> {
        const model = this.reqMapper.map(req);

        const addedModel = await this.repo.add(model);

        return this.resMapper.map(addedModel);
    }
}
