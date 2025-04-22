import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import dotenv from 'dotenv';

dotenv.config()

const router = express.Router();

router.use('/auth', createProxyMiddleware({
    target: process.env.AUTH_SERVICE,
    changeOrigin: true,
    pathRewrite: { '^/api/auth': '' }
  }));

router.use('/user', createProxyMiddleware({
    target: process.env.USER_SERVICE,
    changeOrigin: true,
    pathRewrite: { '^/api/user': '' }
}));

router.use('/restaurant', createProxyMiddleware({
    target: process.env.RESTAURANT_SERVICE,
    changeOrigin: true,
    pathRewrite: { '^/api/restaurant': '' }
  }));
router.use('/order', createProxyMiddleware({
    target: process.env.ORDER_SERVICE,
    changeOrigin: true,
    pathRewrite: { '^/api/order': '' }
  }));

export default router;