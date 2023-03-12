import React, { useEffect } from 'react';
import './GraphicLine.css';

function GraphicLine(props) {

    const {content, value} = props;

    useEffect(() => {
        const lineStat = document.querySelector(`.lineStat.${content}`);
        lineStat.style.width = `${value}px`;
      }, [content, value]);
    

  return (
    <div className='graphicLine'>
        <div>
            <div className='content'><p>{content}</p></div>
        </div>
        <div className='lineStat-container'>
            <div className={`lineStat ${content}`}></div>
        </div>
        <div>
            <div className='value'><p>{value}</p></div>
        </div>
    </div>
  )
}

export default GraphicLine