import { LoginUserRequest } from "../../application/logic/services/login-user/login/login-user.request.ts";
import { LoginUserResponse } from "../../application/logic/services/login-user/login/login-user.response.ts";
import { LoginUserService } from "../../application/logic/services/login-user/login/login-user.service.ts";

export class LoginController {
	private readonly loginUserService;

	constructor(loginUserService: LoginUserService) {
		this.loginUserService = loginUserService;
	}

	// Login user with proc
	public async loginUser(req: LoginUserRequest): Promise<LoginUserResponse> {
		return await this.loginUserService.execute(req);
	}
}
