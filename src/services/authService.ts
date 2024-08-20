import { Api } from "./api";

class AuthService extends Api {
	async signIn(data: unknown) {
		const response = await this.api.post(`/sign-in`, data);
		const token: string = `Bearer ${(response).data.accessToken}`;

		this.api.interceptors.request.use((config) => {
			config.headers = {
				Authorization: token,
			};
		})

		return response;
	}
}

export const authService = new AuthService();
