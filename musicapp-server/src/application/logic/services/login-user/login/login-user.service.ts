import { LoginUserRepository } from "../../../../../infrastructure/data-access/repositories/login-user.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { LoginUserResponseMapper } from "../../../mappers/response-mappers/login-user.response-mapper.ts";
import { LoginUserRequest } from "./login-user.request.ts";
import { LoginUserResponse } from "./login-user.response.ts";

export class LoginUserService extends BaseService<LoginUserRequest, LoginUserResponse> {
	private readonly repo;
	private readonly resMapper = new LoginUserResponseMapper();

	constructor(repo: LoginUserRepository) {
		super();

		this.repo = repo;
	}

	/**
	 * @param password Plaintext password
	 * @param salt Hash salt
	 * @returns Hashed password
	 *
	 * Returns the hashed password computed with SHA-256
	 */
	private async computeSHA256Hash(password: string, salt: string): Promise<Uint8Array> {
		const encoder = new TextEncoder();
		const input = password + "|" + salt;
		const data = encoder.encode(input);

		// Calculate hash
		const hashBuffer = await globalThis.crypto.subtle.digest("SHA-256", data);

		// Convert buffer
		return new Uint8Array(hashBuffer);
	}

	public override async execute(req: LoginUserRequest): Promise<LoginUserResponse> {
		const {
			username,
			password,
		} = req.item;

		// Get salt from env
		const salt = process.env.SALT || "";

		const hashPassword = await this.computeSHA256Hash(password, salt);

		// Login user with proc
		const res = await this.repo.executeLoginUserProcedure(username, hashPassword);

		return this.resMapper.map(res);
	}
}
