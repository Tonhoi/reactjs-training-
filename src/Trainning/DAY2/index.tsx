import React, { Component} from 'react';

const Mounting = () => {
    
    return (
        <div>
            <div>components đã được mount vào DOM</div>
        </div>
    );
};
 /*   {<button onClick={(e) => setMount(!mount)}>Click me</button>
        {mount && <Mounting />} } 
        (Bỏ cái này vào file app.tsx)        
*/

export default Mounting;