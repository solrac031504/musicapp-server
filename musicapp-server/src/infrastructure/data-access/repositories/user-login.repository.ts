import { DataSource } from "typeorm";
import { UserLoginModel } from "../../../domain/models/user-login.model.ts";
import { Repository } from "../../common/data-access/repositories/repository.ts";
import { UserLoginEntityMapper } from "../../logic/mappers/user-login.entity-mapper.ts";
import { UserLoginEntity } from "../entities/user-login.entity.ts";

export class UserLoginRepository
    extends Repository<
        UserLoginModel,
        UserLoginEntity,
        UserLoginEntityMapper,
        DataSource
    > {
    constructor(dataSource: DataSource) {
        super(dataSource, UserLoginEntity, new UserLoginEntityMapper());
    }

    protected override async findOneById(
        id: number,
    ): Promise<UserLoginEntity | null> {
        return await this.repo.findOneBy({ userLoginId: id });
    }
}
