import React from 'react';
import PageBack from './PageBack/PageBack';
import PageFoward from './PageFoward/PageFoward';
import './Pagination.css';

function Pagination() {
  return (
    <div className='pagination'>
      <PageBack />
      <PageFoward />
    </div>
  )
}

export default Pagination;