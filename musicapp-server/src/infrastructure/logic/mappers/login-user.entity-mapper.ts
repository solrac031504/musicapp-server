import { LoginUserModel } from "../../../domain/models/login-user.model.ts";
import { EntityMapper } from "../../common/mappers/entity-mapper.ts";
import { LoginUserEntity } from "../../data-access/entities/login-user.entity.ts";

export class LoginUserEntityMapper
    extends EntityMapper<LoginUserModel, LoginUserEntity> {
    public override toModel(entity: LoginUserEntity): LoginUserModel {
        return {
            poauthenticated: entity.poauthenticated,
            poauthexpiration: entity.poauthexpiration,
            poisadmin: entity.poisadmin,
            poerrormessage: entity.poerrormessage,
        } as LoginUserModel;
    }

    public override fromModel(model: LoginUserModel): LoginUserEntity {
        return {
            poauthenticated: model.poauthenticated,
            poauthexpiration: model.poauthexpiration,
            poisadmin: model.poisadmin,
            poerrormessage: model.poerrormessage,
        } as LoginUserEntity;
    }
}
