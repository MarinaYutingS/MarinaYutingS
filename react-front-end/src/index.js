import React from "react"
import ReactDOM from "react-dom"
import App from"./componments/App"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import './css/index.css'
import './css/button.css'
import './css/form.css'
import './css/variables.css'
import './css/main.css'

ReactDOM.render(
    <React.StrictMode>
        <App />
        {/* <Router>
            <Route path="/" element={<App/>}/>
            <Route path="/" component={App} />
        </Router> */}
    </React.StrictMode>,
    document.getElementById("root")
)