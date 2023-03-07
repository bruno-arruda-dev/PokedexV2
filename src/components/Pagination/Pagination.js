import React, { useContext } from 'react';
import { PaginationContext } from '../Context/PaginationContext';
import PageBack from './PageBack/PageBack';
import PageFoward from './PageFoward/PageFoward';
import './Pagination.css';

function Pagination() {

  const { handlePageBack, handlePageFoward, offset, currentPage } = useContext(PaginationContext);

  return (
    <div className='pagination'>
      <PageBack />
      <div>{currentPage} / {offset} </div>
      <PageFoward />
    </div>
  )
}

export default Pagination;