import { DataSource } from "typeorm";
import { LoginController } from "../../../api/controllers/login.controller.ts";
import { LoginUserService } from "../../../application/logic/services/login-user/login/login-user.service.ts";
import { LoginUserProcedure } from "../../data-access/procedures/login-user.procedure.ts";
import { LoginUserRepository } from "../../data-access/repositories/login-user.repository.ts";

export function bootstrapLogin(dataSource: DataSource): LoginController {
	const procedure = new LoginUserProcedure(dataSource);
	const repo = new LoginUserRepository(dataSource, procedure);

	return new LoginController(new LoginUserService(repo));
}
