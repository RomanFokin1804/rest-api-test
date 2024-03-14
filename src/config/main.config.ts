import * as process from 'process';

export default () => ({
  appPort: parseInt(process.env.PORT, 10) || 3000,
});
