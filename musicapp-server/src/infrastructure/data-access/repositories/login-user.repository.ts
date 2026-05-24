import { DataSource } from "typeorm";
import { LoginUserModel } from "../../../domain/models/login-user.model.ts";
import { Repository } from "../../common/data-access/repositories/repository.ts";
import { LoginUserEntityMapper } from "../../logic/mappers/login-user.entity-mapper.ts";
import { LoginUserEntity } from "../entities/login-user.entity.ts";
import { LoginUserParameters } from "../parameters/login-user.parameters.ts";
import { LoginUserProcedure } from "../procedures/login-user.procedure.ts";

export class LoginUserRepository extends Repository<
	LoginUserModel,
	LoginUserEntity,
	LoginUserEntityMapper,
	DataSource
> {
	private readonly loginUserProcedure;

	constructor(
		dataSource: DataSource,
		loginUserProcedure: LoginUserProcedure,
	) {
		super(dataSource, LoginUserEntity, new LoginUserEntityMapper());

		this.loginUserProcedure = loginUserProcedure;
	}

	protected override findOneById(_id: number): Promise<LoginUserEntity | null> {
		throw new Error("Method is not available");
	}

	public async executeLoginUserProcedure(username: string, password: Uint8Array): Promise<LoginUserModel> {
		const loginUserParameters = {
			username: username,
			password: password,
		} as LoginUserParameters;

		const results = await this.loginUserProcedure.executeProcedure(
			loginUserParameters,
		);

		return this.mapper.toModel(results);
	}
}
