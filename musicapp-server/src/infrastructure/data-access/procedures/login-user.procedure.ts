import { DataSource } from "typeorm";
import { BaseProcedure } from "../../common/data-access/procedures/base-procedure.ts";
import { LoginUserEntity } from "../entities/login-user.entity.ts";
import { LoginUserParameters } from "../parameters/login-user.parameters.ts";

export class LoginUserProcedure extends BaseProcedure<LoginUserParameters, LoginUserEntity> {
	constructor(private readonly dataSource: DataSource) {
		super();
	}

	public override async executeProcedure(parameter: LoginUserParameters): Promise<LoginUserEntity> {
		const result = await this.dataSource.query(
			`CALL login_user($1, $2, NULL, NULL, NULL, NULL)`,
			[parameter.username, parameter.password],
		);

		return result[0] as LoginUserEntity;
	}
}
