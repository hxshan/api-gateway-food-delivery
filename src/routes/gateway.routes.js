import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import dotenv from 'dotenv';

dotenv.config()

const router = express.Router();

router.use('/auth', createProxyMiddleware({
    target: process.env.AUTH_SERVICE,
    changeOrigin: true,
    pathRewrite: { '^/api/auth': '' },
    logLevel: 'debug',
    onProxyRes: (proxyRes, req, res) => {
      proxyRes.headers['Access-Control-Allow-Origin'] = req.headers.origin;
      proxyRes.headers['Access-Control-Allow-Credentials'] = 'true';
      proxyRes.headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization';
      proxyRes.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
    }
  }));

  router.use('/user',
    createProxyMiddleware({
      target: process.env.USER_SERVICE,
      changeOrigin: true,
      pathRewrite: { '^/api/user': '' },
      logLevel: 'debug',  
      onProxyReq: (proxyReq, req, res) => {
        console.log('➡️ [Gateway] Proxying:', req.method, req.originalUrl);
      },
      onProxyRes: (proxyRes, req, res) => {
        console.log('⬅️ [Gateway] Got response for:', req.method, req.originalUrl);
      }
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