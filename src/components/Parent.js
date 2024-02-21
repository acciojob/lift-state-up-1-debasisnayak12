import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
    const [showModal,setshowModal] = useState(false);

    return(
        <div className="parent">
            <h1>Parent Component</h1>
            <Child setshowModal={setshowModal} showModal={showModal} />
        </div>
    )
}

export default Parent;