import report from './report/report';
import status from './status';

export default (app) => {
  app.use('/report', report);
  app.use('/status', status);
};
