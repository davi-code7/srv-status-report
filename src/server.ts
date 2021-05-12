import { success } from './utils/logger/logger';
import app from './app';

const port = process.env.PORT || 5005;

app.listen(port, () => {
  success(`${process.env.APP_NAME} is listening on port: ${port}`);
});
