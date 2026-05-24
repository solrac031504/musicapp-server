import { LoginUserModel } from "../../../domain/models/login-user.model.ts";
import { EntityMapper } from "../../common/mappers/entity-mapper.ts";
import { LoginUserEntity } from "../../data-access/entities/login-user.entity.ts";

export class LoginUserEntityMapper
    extends EntityMapper<LoginUserModel, LoginUserEntity> {
    public override toModel(entity: LoginUserEntity): LoginUserModel {
        return {
            isAuthenticated: entity.poauthenticated,
            authExpiration: entity.poauthexpiration,
            isAdmin: entity.poisadmin,
            errorMessage: entity.poerrormessage,
        } as LoginUserModel;
    }

    public override fromModel(model: LoginUserModel): LoginUserEntity {
        return {
            poauthenticated: model.isAuthenticated,
            poauthexpiration: model.authExpiration,
            poisadmin: model.isAdmin,
            poerrormessage: model.errorMessage,
        } as LoginUserEntity;
    }
}
