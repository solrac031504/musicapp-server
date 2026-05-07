import { BaseParameter } from "../../common/data-access/parameters/base-parameter.ts";

export class LoginUserParameters extends BaseParameter {
    username!: string;

    password!: Uint8Array;

    returnAuthenticated: boolean = false;

    returnAuthExpiration: Date | null = null;

    returnIsAdmin: boolean = false;

    returnErrorMessage: string | null = null;
}
