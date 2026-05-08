import { BaseModel } from "../common/models/base.model.ts";

export class LoginUserModel extends BaseModel {
    isAuthenticated!: boolean;

    authExpiration!: Date | null;

    isAdmin!: boolean;

    errorMessage!: string | null;
}
