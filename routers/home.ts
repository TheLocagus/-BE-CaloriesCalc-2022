import * as express from 'express';
import {ProductRecord} from "../records/product.record";

export const homeRouter = express.Router();

homeRouter
    .get('/', async (req, res) => {
        const products = await ProductRecord.findAll();
        res.json({
            products,
            success: true,
        })
    })
