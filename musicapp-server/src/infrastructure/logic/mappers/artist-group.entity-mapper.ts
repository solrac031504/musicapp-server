import { ArtistGroupModel } from "../../../domain/models/artist-group.model.ts";
import { EntityMapper } from "../../common/mappers/entity-mapper.ts";
import { ArtistGroupEntity } from "../../data-access/entities/artist-group.entity.ts";

export class ArtistGroupEntityMapper extends EntityMapper<ArtistGroupModel, ArtistGroupEntity> {
	public override toModel(entity: ArtistGroupEntity): ArtistGroupModel {
		return {
			id: entity.artistGroupId,
			artistGroupName: entity.artistGroupName,
			isActive: entity.isActive,
			createdBy: entity.createdBy,
			modifiedBy: entity.modifiedBy,
		} as ArtistGroupModel;
	}

	public override fromModel(model: ArtistGroupModel): ArtistGroupEntity {
		return {
			artistGroupId: model.id,
			artistGroupName: model.artistGroupName,
			isActive: model.isActive,
			createdBy: model.createdBy,
			modifiedBy: model.modifiedBy,
		} as ArtistGroupEntity;
	}
}
