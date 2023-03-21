import React, {useState} from 'react';
import './BrunoArruda.css';

function BrunoArruda() {
    const [isOpen, setIsOpen] = useState("closed");

    const handleOpenAbout = () => {
        isOpen === "closed" ? setIsOpen("open") : setIsOpen("closed");
    }

  return (
    <div className={`brunoArruda ${isOpen}`} onClick={handleOpenAbout}>
      <p>tank<span className='dot'>.</span><span className='me'>you</span></p>
    </div>
  );
}

export default BrunoArruda;
