import { BaseModel } from "./base.model.ts";

export class BaseMembershipModel extends BaseModel {
    groupId!: number;

    memberId!: number;
}