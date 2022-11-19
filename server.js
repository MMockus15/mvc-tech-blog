//initializing server
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');

//instence of express
const app = express();
//connects port that server will run on
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
//initializing session object
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//creating session object
const sess = {
	secret: 'Super secret secret',
	cookie: {
		maxAge: 300000,
		httpOnly: true,
		secure: false,
		sameSite: 'strict',
	},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
})
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

//controllers
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

app.listen(PORT, () => {
console.log(`App listening on port ${PORT}!`);
sequelize.sync({ force: false });
});