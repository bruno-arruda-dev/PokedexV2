import React, { useContext } from 'react';
import { PaginationContext } from '../Context/PaginationContext';
import PageBack from './PageBack/PageBack';
import PageFoward from './PageFoward/PageFoward';
import './Pagination.css';

function Pagination() {

  const { maxPages, currentPage } = useContext(PaginationContext);

  return (
    <div className='pagination'>
      <PageBack />
      <div>{currentPage} / {maxPages} </div>
      <PageFoward />
    </div>
  )
}

export default Pagination;