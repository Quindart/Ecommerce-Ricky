import { Icon } from '@iconify/react'
import ReactPaginate from 'react-paginate'
import { useNavigate, useLocation } from 'react-router'

const Pagination = (props) => {
  const { className, style, data, currentPage, pageCount, ...rest } = props

  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const handlePageClick = (event) => {
    const newOffset = +event.selected + 1
    const path = location.pathname.split("/page")[0]
    navigate(`${path}/page/${newOffset}?${searchParams.toString()}`);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <>
      <div className={className} style={style} {...rest}>
        <nav className="pagination">
          <ReactPaginate
            forcePage={currentPage - 1}
            autoResetPageIndex={false}
            onPageChange={handlePageClick}
            pageRangeDisplayed={1}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            breakLabel="..."
            nextClassName="pagination__pages--btn"
            nextLabel={
              <Icon width={24} height={24} icon="pajamas:arrow-right" />
            }
            pageLinkClassName="pagination__pages--btn"
            previousLabel={
              <Icon width={24} height={24} icon="pajamas:arrow-left" />
            }
            breakLinkClassName="pagination__pages--btn"
            previousClassName="pagination__pages--btn"
            containerClassName="pagination__pages"
            pageClassName="pagination__pages--btn"
            disabledClassName="disable"
            activeLinkClassName="active"
            renderOnZeroPageCount={null}
          />
        </nav>
      </div>
    </>
  )
}

export default Pagination
