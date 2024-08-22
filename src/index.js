import React from 'react';
import ReactDOM from 'react-dom';
import Shoppingmart from './components/cart';

 function Shopping(){
    return(
        <div>
            <Shoppingmart/>
    </div>
    )
 }
 ReactDOM.render(<Shopping />,document.getElementById("root"));
