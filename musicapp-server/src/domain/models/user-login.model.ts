import { BaseIdModel } from "../common/models/base-id.model.ts";

export class UserLoginModel extends BaseIdModel {
    username!: string;

    password!: Uint8Array;

    loginCount!: number;

    lastLoginDate!: Date | null;

    isActive!: boolean;

    isAdmin!: boolean;
}