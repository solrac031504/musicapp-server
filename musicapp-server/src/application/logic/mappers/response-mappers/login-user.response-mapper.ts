import { LoginUserModel } from "../../../../domain/models/login-user.model.ts";
import { BaseResponseMapper } from "../../../common/mappers/base-response-mapper.ts";
import { LoginUserResponseDTO } from "../../../dto/login-user-response.dto.ts";
import { LoginUserResponse } from "../../services/login-user/login/login-user.response.ts";

export class LoginUserResponseMapper extends BaseResponseMapper<LoginUserResponse, LoginUserModel> {
	public override map(model: LoginUserModel): LoginUserResponse {
		return new LoginUserResponse({
			isAuthenticated: model.isAuthenticated,
			isAdmin: model.isAdmin,
			authExpiration: model.authExpiration,
			errorMessage: model.errorMessage,
		} as LoginUserResponseDTO);
	}
}
