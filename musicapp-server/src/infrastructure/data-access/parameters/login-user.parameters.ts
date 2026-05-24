import { BaseParameter } from "../../common/data-access/parameters/base-parameter.ts";

/**
 * Parameters for login_user procedure
 */
export class LoginUserParameters extends BaseParameter {
    username!: string;

    password!: Uint8Array;
}
