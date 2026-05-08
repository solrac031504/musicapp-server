import { BaseModel } from "../common/models/base.model.ts";

export class LoginUserModel extends BaseModel {
    poauthenticated!: boolean;

    poauthexpiration!: Date | null;

    poisadmin!: boolean;

    poerrormessage!: string | null;
}
