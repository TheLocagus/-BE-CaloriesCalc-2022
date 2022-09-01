import express, {Router} from 'express';
import rateLimit from 'express-rate-limit';
import {homeRouter} from "./routers/home";
import cors from 'cors';
import {changePasswordRouter} from "./routers/change-password";
import {userRouter} from "./routers/user";
import cookieParser from 'cookie-parser';
import {authRouter} from "./routers/auth";
import {errorHandle} from "./utils/error";
import {config} from "./config/config";

const app = express();

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
})

app.use(cors({
    origin: config.corsOrigin,
    credentials: true,
}))
app.use(limiter);
app.use(cookieParser());
app.use(express.json());

const router = Router();


router.use('/', homeRouter);
router.use('/auth', authRouter);
router.use('/change-password', changePasswordRouter);
router.use('/user', userRouter);

app.use('/api', router);

app.use(errorHandle);

app.listen(3002, '0.0.0.0', ()=>{
    console.log('Server is running at http://localhost:3002/api.')
})