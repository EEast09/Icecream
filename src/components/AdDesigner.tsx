import React, {useState} from 'react';
import logo from './logo.svg';
import './AdDesigner.css';

export function AdDesigner(){
    const [flavor, setFlavor] = useState<string>("Strawberry");
    const [theme, setTheme] = useState(true)
     let themeClass = ""
    if(theme){
        themeClass = "light-blue"
    } else {
        themeClass = "dark"
    }

    
   

    return ( 
    <div className="AdDesigner">
        <h1>Ad Designer</h1>
        <div className={"ad-container " + themeClass}>

        <p>Vote for:</p>
        <p className= "flavor">{flavor}</p>
        <>{theme}</>
        </div>
        <div className='flavor-button'>
            <p>What to support</p>
            <button onClick={() => setFlavor("Chocolate")}>Chocolate</button>
            <button onClick={() => setFlavor("Vanilla")}>Vanilla</button>
            <button onClick={() => setFlavor("Starwberry")}>Strawberry</button>
        </div>
        <div >

            <p>Color Theme</p>
           
            <button onClick = {() => setTheme(true)}>Light</button>
            <button onClick = {() => setTheme(theme===false)}>Dark</button>
        </div>
        <div>
            <p>Font Size</p>
            <button>Down</button>
            <button>Up</button>
        </div>
    </div>
    );
}

        export default AdDesigner;

        /**How to attach click to ad-container?
         * slide on  46
         */

