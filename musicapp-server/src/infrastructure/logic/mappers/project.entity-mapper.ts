import { ProjectModel } from "../../../domain/models/project.model.ts";
import { EntityMapper } from "../../common/mappers/entity-mapper.ts";
import { ProjectEntity } from "../../data-access/entities/project.entity.ts";

export class ProjectEntityMapper extends EntityMapper<ProjectModel, ProjectEntity> {
	public override toModel(entity: ProjectEntity): ProjectModel {
		return {
			id: entity.projectId,
			projectName: entity.projectName,
			artistGroupId: entity.artistGroupId,
			sceneId: entity.sceneId,
			projectTypeId: entity.projectTypeId,
			releaseDate: entity.releaseDate,
			rating: entity.rating,
			createdBy: entity.createdBy,
			modifiedBy: entity.modifiedBy,
		} as ProjectModel;
	}

	public override fromModel(model: ProjectModel): ProjectEntity {
		return {
			projectId: model.id,
			projectName: model.projectName,
			artistGroupId: model.artistGroupId,
			sceneId: model.sceneId,
			projectTypeId: model.projectTypeId,
			releaseDate: model.releaseDate,
			rating: model.rating,
			createdBy: model.createdBy,
			modifiedBy: model.modifiedBy,
		} as ProjectEntity;
	}
}
