import React, { useContext } from 'react';
import './PageFoward.css';
import '../Arrow.css';
import { PaginationContext } from '../../Context/PaginationContext';

function PageFoward() {
  const { GoFoward } = useContext(PaginationContext);

  const handlePageFoward = () => {
    GoFoward()
  }

  return (
    <div  onClick={handlePageFoward}
          className='pagefoward arrow'></div>
  )
}

export default PageFoward;