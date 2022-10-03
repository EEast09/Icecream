import React, {useState} from 'react';
import './Votes.css';

export function Votes(){
    const [count, flavorVote] = useState<number>(0);
   /**let totalCount = make this three times */

    const percent = count/count*100



    return <div className = "votes">
<h1>Vote Here!</h1>
<p>Testing</p>

<div className='flavor-button'>
            <p>What to support</p>
            <button onClick={() => flavorVote(prevCount => prevCount + 1)}>Chocolate</button>
            <div className='chocolate-bar'>{percent}</div>


            <button onClick={() => flavorVote(count + 1)}>Vanilla</button>
            <div className='vanilla-bar'>{percent}</div>

            <button onClick={() => flavorVote(count + 1)}>Strawberry</button>
            <div className='strawberry-bar'>{percent}</div>
        </div>
    </div>;
}

/**
         * 
         */