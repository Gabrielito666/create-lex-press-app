const lexpress = require('lex-press');
const app = lexpress();

const CONSTS = require('./lib/consts');

app.public(CONSTS.PUBLIC_PATH);
app.views(CONSTS.VIEWS_PATH);

app.get("/", (_, res) => res.redirect("/home"));

// Your code

app.listen(CONSTS.PORT, () => { console.log(`Server running in port ${CONSTS.PORT}`) });