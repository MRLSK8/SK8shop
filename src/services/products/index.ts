import { showErrorAlert } from '~/helpers';
import { api } from '~/services/api';

interface IProducts {
	createdAt: string,
	name: string,
	avatar: string,
	id: string
}

const getProducts = async (): Promise<IProducts[] | []> => {
	try {
		const response = await api.get('/products');
		return response.data;
	} catch (error: unknown) {
		showErrorAlert("Oops! ", "Something went wrong while getting products");
	}

	return [];
}

export const productsService = {
	getProducts
};
