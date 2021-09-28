import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, } from "react-router-dom";
import Contact from '../components/Contact';
import Home from '../components/Home';
import News from '../components/News';
import NewsDetail from '../components/NewsDetail';


class DieuHuongURL extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/tin" component={News} />
                <Route exact path="/tin-tuc/:slug.:id.html" component={NewsDetail} />
                <Route exact path="/lien-he" component={Contact} />
            </div>
        );
    }
}

export default DieuHuongURL;