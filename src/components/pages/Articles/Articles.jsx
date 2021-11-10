import React from "react";
import { useLocation, useParams } from "react-router";

const Articles = () => {
    const {id } = useParams();
    
    return(
        <div>
            <h1>Articles</h1>
            <h2>Getting Data for Article {id}</h2>
        </div>
    )
}
export default Articles