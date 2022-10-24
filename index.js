const fastify = require('fastify');

const ENV = process.env.NODE_ENV || 'sit'

const app = fastify({
  logger: true
});

app.get('/', async () => {
  return {
    status: 'ok',
    message: 'Check',
    env: ENV
  }
});

app.listen(3000, '0.0.0.0');