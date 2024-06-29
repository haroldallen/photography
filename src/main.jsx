import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/themes.css";
import "./assets/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Main />
);

function Main() {
    const [ viewing, setViewing ] = useState(null);

    return <>
        <header className="jsb">
            <div className="left">
                <a className="logo" href="/">ALLEN</a><span>/</span>
                <a className="title" href="/photography">photography</a>
            </div>
            <div></div>
        </header>
        <div className={"content "+(viewing?"viewing":"list")}>
            <App viewing={viewing} setViewing={setViewing} />
        </div>
        <footer>&copy; Copyright {new Date().getFullYear()} Harold Allen. All rights reserved.</footer>
    </>;
}
