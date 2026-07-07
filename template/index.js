const lexpress = require('lex-press');
const app = lexpress();

if(!process.env.PORT) throw new Error("This app needs a PORT environment variable");

app.public(CONSTS.PUBLIC_PATH);
app.views(CONSTS.VIEWS_PATH);

// Your code

app.listen(process.env.PORT, () => {
    console.log(`Server running in port ${process.env.PORT}`);
});
