import React from 'react';
import { usePagination, DOTS } from './usePagination';
import { ReactComponent as RightArrow } from '../../../assets/images/right_arrow.svg';
import "./pagination.scss";

const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange?.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange?.[paginationRange?.length - 1];

  return (
    <div className='pagination'>
        <ul
      className={"pagination_wrapper"}
    >
      <li
        className={currentPage !== 1 ? "pagination_wrapper_left" : "pagination_wrapper_left disabled"}
        onClick={onPrevious}
      >
        <RightArrow />
      </li>
      {paginationRange?.map(pageNumber => {
        if (pageNumber === DOTS) {
          return <li className="">&#8230;</li>;
        }

        return (
          <li
            className={ pageNumber === currentPage ? "pagination_wrapper_page selected" : "pagination_wrapper_page"}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={currentPage === lastPage ? "pagination_wrapper_right disabled" : "pagination_wrapper_right"}
        onClick={onNext}
      >
         <RightArrow />
      </li>
    </ul>
    </div>
  );
};

export default Pagination;