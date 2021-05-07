import React from 'react';

function PageNotFound(){
    return(
        <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("./assets/img/lost-2.jpg").default + ")",
        }}
        >
        <div className="title-brand">
        <h1><b>404</b></h1>
        <h3><b>Page Not Found</b></h3>
        </div>
        </div>
    )
}
export default PageNotFound;
