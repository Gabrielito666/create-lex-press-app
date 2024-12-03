import Lex, { useState } from "@lek-js/lex"

const CounterExample = () =>
{
    const [count, setCount] = useState(0);

    return <div>
        <h3>{count}</h3>
        <button onClick={() =>{ setCount(count + 1) }}>Increment</button>
    </div>
}

const Home = () =>
{
    return <main>
        <h1>Hello world</h1>
        <h2>This is my LEX-PRESS app</h2>
        <CounterExample/>
        <CounterExample/>
        <CounterExample/>
    </main>
}

export default Home;