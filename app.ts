import { applogger, requestLogger } from './container.ts';
import { json, opine, urlencoded } from './deps.ts';
import { opineCors } from 'https://deno.land/x/cors@v1.2.2/mod.ts';

const app = opine();

app.use(json());
app.use(urlencoded());
app.use(opineCors());
app.use((req, res, next) => {
	requestLogger.info(
		JSON.stringify(`[${req.method}] ${req.url}`),
	);
	next();
});

export default app;
