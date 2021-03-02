import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({title,info}) => {


    //so we need a state to know when to show the info default need to be false
    const [showInfo, setShowInfo] = useState(false);


  

  return <article className="question">
            <header>
                <h4>{title}</h4>
                <button onClick={() => setShowInfo(!showInfo)} className="btn">
                    {/* If show info is true then show minus to pull info back up */}
                    {showInfo? <AiOutlineMinus/> : <AiOutlinePlus/>}
                </button>
            </header>
            {
                //if show info is true do that
                showInfo && <p>{info}</p>
            }
          </article>;
};

export default Question;