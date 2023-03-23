import React, { useEffect } from 'react';
import './GraphicLine.css';

function GraphicLine(props) {
    const {content, value, numericalValue} = props;

    useEffect(() => {
        const lineStat = document.querySelector(`.lineStat.${content}`);
        lineStat.style.width = `${value}%`;
      }, [content, value]);
    

  return (
    <div className='graphicLine'>
        <div className='content'><p>{content}</p></div>
        <div className='lineStat-container'>
            <div className={`lineStat ${content}`}></div>
        </div>
        <div className='numericalValue'>{numericalValue}</div>
    </div>
  )
}

export default GraphicLine;