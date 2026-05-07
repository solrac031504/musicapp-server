import { BaseIdModel } from "../common/models/base-id.model.ts";
export class ArtistGroupMembershipModel extends BaseIdModel {
    artistGroupId!: number;

    artistId!: number;
}
