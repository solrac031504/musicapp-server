import { ArtistGroupMembershipModel } from "../../../domain/models/artist-group-membership.model.ts";
import { EntityMapper } from "../../common/mappers/entity-mapper.ts";
import { ArtistGroupMembershipEntity } from "../../data-access/entities/artist-group-membership.entity.ts";

export class ArtistGroupMembershipEntityMapper
    extends EntityMapper<
        ArtistGroupMembershipModel,
        ArtistGroupMembershipEntity
    > {
    public override toModel(
        entity: ArtistGroupMembershipEntity,
    ): ArtistGroupMembershipModel {
        return {
            id: entity.artistGroupMembershipId,
            artistGroupId: entity.artistGroupId,
            artistId: entity.artistId,
        } as ArtistGroupMembershipModel;
    }

    public override fromModel(
        model: ArtistGroupMembershipModel,
    ): ArtistGroupMembershipEntity {
        return {
            artistGroupMembershipId: model.id,
            artistGroupId: model.artistGroupId,
            artistId: model.artistId,
        } as ArtistGroupMembershipEntity;
    }
}
