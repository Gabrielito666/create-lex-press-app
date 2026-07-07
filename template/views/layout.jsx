import Lex from "@lek-js/lex";
import "./global.css";

const Layout = ({ children }) =>
{
    return <html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Lex-press App</title>
    </head>
    <body>
        {children}
    </body>
    </html>
}

export default Layout;
