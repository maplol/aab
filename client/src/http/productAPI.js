import { $authHost, $host } from "./index";
// import jwt_decode from "jwt-decode";

export const createProduct = async (product) => {
	const { data } = await $authHost.post("api/catalog/product", product);
	return data;
};

export const fetchProducts = async () => {
	const { data } = await $host.get("api/catalog/product");
	return data;
};

export const fetchOneProduct = async (id) => {
	const { data } = await $host.get("api/catalog/product/" + id);
	return data;
};

export const editProduct = async (product) => {
	const { data } = await $authHost.put("api/catalog/product", product);
	return data;
};

export const removeProduct = async (id) => {
	const { data } = await $authHost.delete("api/catalog/product/" + id);
	return data;
};

export const typeProduct = async (type, pricemax, pricemin, size, volume) => {
	const { data } = await $host.get("api/catalog/" + type, {
		params: { pricemax, pricemin, size: size, volume: volume },
	});
	return data;
};
