import { DataSource } from "typeorm";
import { ArtistGroupMembershipModel } from "../../../domain/models/artist-group-membership.model.ts";
import { Repository } from "../../common/data-access/repositories/repository.ts";
import { ArtistGroupMembershipEntityMapper } from "../../logic/mappers/artist-group-membership.entity-mapper.ts";
import { ArtistGroupMembershipEntity } from "../entities/artist-group-membership.entity.ts";

export class ArtistGroupMembershipRepository extends Repository<ArtistGroupMembershipModel, ArtistGroupMembershipEntity, ArtistGroupMembershipEntityMapper, DataSource> {
    constructor(dataSource: DataSource) {
        super(dataSource, ArtistGroupMembershipEntity, new ArtistGroupMembershipEntityMapper);
    }

    protected override async findOneById(id: number): Promise<ArtistGroupMembershipEntity | null> {
        return await this.repo.findOneBy({ artistGroupMembershipId: id });
    }
}