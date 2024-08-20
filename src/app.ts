import express from "express";
import nunjucks from "nunjucks";
import bodyParser from "body-parser";
import session from "express-session";
import { getMeal } from "./controllers/SingleMealController";
import { getNameResult } from "./controllers/SeachByNameController";

const app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

// Specifing folder from where to serve static files (gets rid of MIME type CSS issue)
app.use(express.static("views"));
// Specifying folder from where to fetch images
app.use('/assets', express.static('./src/assets')); 

app.use(session({ secret: 'SUPER_SECRET', cookie: { maxAge: 28800000 }}));

declare module "express-session" {
  interface SessionData {
    token: string;
  }
}

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

app.get('/', (req: express.Request, res: express.Response) => {
  res.render('index.html'
  );
});

app.get('/singleMeal', getMeal);
app.post('/search/', getNameResult);