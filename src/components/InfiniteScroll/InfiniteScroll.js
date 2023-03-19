import React, {useEffect, useContext} from 'react';
import './InfiniteScroll.css';
import { PaginationContext } from '../Context/PaginationContext';

function InfiniteScroll() {
    const {infiniteScrollHandle, offset, currentPage, maxPages, scrollLimit} = useContext(PaginationContext);

    useEffect(() => {
        const intersectionObserver = new IntersectionObserver((entries) => {
            if(entries.some((entry) => entry.isIntersecting)) {
                console.log(`Pagina atual ${currentPage} / ${maxPages}`);
                console.log(`Limite por página: ${scrollLimit}, iniciando em: ${offset}`);
                infiniteScrollHandle();
            }
        });


        intersectionObserver.observe(document.querySelector('#inifiniteScroll-observer'));

        return () => intersectionObserver.disconnect();
    }, []);


    return (
        <div className='infiniteScroll' id='inifiniteScroll-observer' />
    );
}

export default InfiniteScroll;
