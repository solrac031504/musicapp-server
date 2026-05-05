import { UserLoginModel } from "../../../domain/models/user-login.model.ts";
import { EntityMapper } from "../../common/mappers/entity-mapper.ts";
import { UserLoginEntity } from "../../data-access/entities/user-login.entity.ts";

export class UserLoginEntityMapper extends EntityMapper<UserLoginModel, UserLoginEntity> {
    public override toModel(entity: UserLoginEntity): UserLoginModel {
        return {
            id: entity.userLoginId,
            username: entity.username,
            password: entity.password,
            loginCount: entity.loginCount,
            lastLoginDate: entity.lastLoginDate,
            isActive: entity.isActive,
            isAdmin: entity.isAdmin
        } as UserLoginModel
    }

    public override fromModel(model: UserLoginModel): UserLoginEntity {
        return {
            userLoginId: model.id,
            username: model.username,
            password: model.password,
            loginCount: model.loginCount,
            lastLoginDate: model.lastLoginDate,
            isActive: model.isActive,
            isAdmin: model.isAdmin
        } as UserLoginEntity
    }
}