import { BaseEntity } from "../../common/data-access/entities/base-entity.ts";

/**
 * Return values from login user procedure
 */
export class LoginUserEntity extends BaseEntity {
    poauthenticated!: boolean;

    poauthexpiration!: Date | null;

    poisadmin!: boolean;

    poerrormessage!: string | null;
}
