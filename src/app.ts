import express from 'express';
import helmet from 'helmet';
import compression from 'compression'; // compresses requests
import path from 'path';

import { indexRouter } from './routers';
import { removeWww } from './utils/redirectToUrl';

// Create Express server
const app = express();

// Express configuration
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, './../views'));
app.set('view engine', 'ejs');

app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));
app.use(express.static(path.join(__dirname, 'src', 'public'), { maxAge: 31557600000 }));
app.all(/.*/, removeWww);

app.use('/', indexRouter);

export default app;
