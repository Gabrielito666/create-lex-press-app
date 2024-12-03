import Lex from "@lek-js/lex";

const Layout = ({ children }) =>
{
    return <html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Document</title>
    </head>
    <body>
        {children}
    </body>
    </html>
}

export default Layout;