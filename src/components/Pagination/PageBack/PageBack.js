import React, { useContext } from 'react';
import { PaginationContext } from '../../Context/PaginationContext';
import '../Arrow.css';

function PageBack() {
  const { GoBack } = useContext(PaginationContext);
  
    const handlePageBack = () => {
      GoBack();
    }

  return (
    <div  onClick={handlePageBack}
          className='pageback arrow'></div>
  )
}

export default PageBack;