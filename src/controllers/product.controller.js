import { getConnection } from "./../database/database";

const getProducts = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * from product");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getByCategoryProducts = async (req, res) => {
    try {
        const connection = await getConnection();
        const id = req.params.id;
        const result = await connection.query("SELECT p.*, c.name as category from product p inner join category c on p.category = c.id WHERE c.id=? ",id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const searchProducts = async (req, res) => {
    try {
        const connection = await getConnection();
        const product = req.query.product
        const result = await connection.query(`SELECT * from product WHERE name LIKE '%${product}%'`);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getProducts,
    getByCategoryProducts,
    searchProducts
};