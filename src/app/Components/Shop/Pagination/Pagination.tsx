
"use client"
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import AllProduct from '../AllProducts/AllProducts';
import { products } from '@/app/data/data';

// Example items, to simulate fetching from another resources.
// const product = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];



export function PaginatedItems({ itemsPerPage }:{itemsPerPage:number,}) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event:any) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
     
      <AllProduct currentItems={currentItems}></AllProduct>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={10}
        pageCount={pageCount}
        previousLabel="Prev"
        renderOnZeroPageCount={null}
        className=' flex justify-center gap-9 my-10 h-[40px]  items-center transition-all duration-300 '
        pageClassName=' size-[60px] bg-[#F9F1E7]  rounded-md flex justify-center items-center hover:bg-black hover:text-white  '
        activeClassName='bg-black text-white'
        activeLinkClassName='bg-[#B88E2F] text-white  size-[60px] rounded-md flex justify-center items-center durations-300'
        nextClassName=' w-[98px] h-[60px] px-2 py-1 bg-[#F9F1E7]  rounded-md flex justify-center items-center hover:bg-black hover:text-white  '
        previousClassName=' w-[98px] h-[60px] px-2 py-1 bg-[#F9F1E7]  rounded-md flex justify-center items-center hover:bg-black hover:text-white  '
        pageLinkClassName='size-[60px]    rounded-md flex justify-center items-center'
       disabledClassName='  hidden'

      />
    </>
  );
}

