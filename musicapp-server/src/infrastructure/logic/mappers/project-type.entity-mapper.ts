import { ProjectTypeModel } from "../../../domain/models/project-type.model.ts";
import { EntityMapper } from "../../common/mappers/entity-mapper.ts";
import { ProjectTypeEntity } from "../../data-access/entities/project-type.entity.ts";

export class ProjectTypeEntityMapper extends EntityMapper<ProjectTypeModel, ProjectTypeEntity> {
	public override toModel(entity: ProjectTypeEntity): ProjectTypeModel {
		return {
			id: entity.projectTypeId,
			projectTypeName: entity.projectTypeName,
			createdBy: entity.createdBy,
			modifiedBy: entity.modifiedBy,
		} as ProjectTypeModel;
	}

	public override fromModel(model: ProjectTypeModel): ProjectTypeEntity {
		return {
			projectTypeId: model.id,
			projectTypeName: model.projectTypeName,
			createdBy: model.createdBy,
			modifiedBy: model.modifiedBy,
		} as ProjectTypeEntity;
	}
}
