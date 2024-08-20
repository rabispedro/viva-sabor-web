import { Api } from "./api";

class UserService extends Api {

	// async create(data: any) {
	// 	const response = await this.api.post(``, {
	// 		headers: {
	// 			Accept: 'application/json',
	// 		},
	// 	});

	// 	return response;
	// }

	// async findAll() {
	// }

	// async findOneById(data: unknown) {
	// }

	// async update(data: unknown) {
	// }

	// async changeActive(data: unknown) {
	// }

	// async softDelete(data: unknown) {
	// }

	// async restore(data: unknown) {
	// }

	// async changePassword(data: unknown) {
	// }

	// async uploadProfileImage(data: unknown) {
	// }

	// async addAddress(data: unknown) {
	// }
}

export const userService = new UserService();
