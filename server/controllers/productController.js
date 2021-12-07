const { Product } = require("../models/models");
const ApiError = require("../error/ApiError");
const { Op } = require("sequelize");

class ProductController {
	async createProduct(req, res, next) {
		try {
			let { name, size, volume, price, pricends, type } = req.body;

			const product = await Product.create({
				name,
				size,
				volume,
				price,
				pricends,
				type,
			});

			return res.json(product);
		} catch (e) {
			next(ApiError.badRequest(e.message));
		}
	}

	async editProduct(req, res) {
		const { id, name, size, volume, price, pricends, type } = req.body;
		await Product.update(
			{ name, size, volume, price, pricends, type },
			{
				where: { id },
			}
		);
		const product = await Product.findOne({
			where: { id },
		});

		return res.json(product);
	}

	async getAllProduct(req, res) {
		let products = await Product.findAndCountAll();
		return res.json(products);
	}

	async getOneProduct(req, res) {
		const { id } = req.params;
		const product = await Product.findOne({
			where: { id },
		});
		return res.json(product);
	}

	async removeProduct(req, res) {
		const { id } = req.params;
		const product = await Product.destroy({
			where: { id },
		});
		return res.json(product);
	}

	async typeProduct(req, res) {
		const { type } = req.params;
		const { size, volume } = req.query;
		let pricemax = req.query.pricemax;
		let pricemin = req.query.pricemin;

		const product = await Product.findAll({
			where: [
				{ type },
				pricemax ? { price: { [Op.between]: [pricemin, pricemax] } } : {},
				size ? { size: { [Op.in]: size.split(",") } } : {},
				volume ? { volume: { [Op.in]: volume.split(",") } } : {},
			],
		});
		return res.json(product);
	}
}

module.exports = new ProductController();
