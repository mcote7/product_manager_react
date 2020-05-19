import React from "react";
import { Link } from '@reach/router';

const Navigation = () => {

    return(
        <>
        <div className="mynavi">
            <Link to="/">back</Link>
            &nbsp;|&nbsp;
            <Link to="/new">create new product</Link>
        </div>
        <br/>
        </>
    );
}

export default Navigation;