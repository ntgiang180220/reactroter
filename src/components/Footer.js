import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="bg-black text-center py-5">
                    <div className="container px-5">
                        <div className="text-white-50 small">
                            <div className="mb-2">Trang web tin tức demo sử dựng React Router</div>


                            <a href="https://reactrouter.com/web/guides/quick-start">React Router</a>

                            <a href="https://reactjs.org/">React js</a>
                            <span class="mx-1">&middot;</span>
                            <a href="https://reactrouter.com/web/guides/quick-start">React Router</a>
                            <span class="mx-1">&middot;</span>
                            <a href="https://www.facebook.com/GiangPC99/">Giang Nguyen</a>

                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;