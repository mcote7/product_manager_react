import React from "react";
import { Link } from '@reach/router';

const Navigation = () => {

    return(
        <>
        <div className="mynavi">
            <Link to="/">all products</Link>
            &nbsp;|&nbsp;
            <Link to="/new">create new product</Link>
        </div>
        <br/>
        <hr/>
        </>
    );
}

export default Navigation;