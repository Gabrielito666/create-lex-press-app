const lexpress = require('lex-press');
const app = lexpress();

if(!process.env.PORT) throw new Error("This app needs a PORT environment variable");

app.public("./public");
app.views("./views");

// Your code

app.listen(process.env.PORT, () => {
    console.log(`Server running in port ${process.env.PORT}`);
});
