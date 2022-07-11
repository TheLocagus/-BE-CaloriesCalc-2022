import express from 'express';
import {ProductRecord} from "../records/product.record";

export const adminRouter = express.Router();

adminRouter
    .post('/', async (req, res) => {
        const newProduct = req.body as ProductRecord;

        const addProduct = new ProductRecord(newProduct).insert()
    })