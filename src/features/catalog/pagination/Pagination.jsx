import './style.scss'

export const Pagination = ({ total, onChangePage, currentPage }) => {
    const maxPages = Math.ceil(total / 4)
    const pageNumbers = [];

    for (let i = currentPage - 2; i <= currentPage + 3; i++) {
        if (i <= maxPages && i > 0) {
            pageNumbers.push(i);
        }
    }

    const handleClickPrev = () => {
        if (currentPage !== 1) {
            onChangePage(currentPage - 1)
        }
    }

    const handleClickNext = () => {
        if (currentPage !== maxPages) {
            onChangePage(currentPage + 1)
        }
    }

    return (
        <ul className='pagination'>

            <li onClick={() => handleClickPrev()} className={currentPage === 1 ? 'pagination__direction pagination__direction_disable' : 'pagination__direction'}>
                Назад
            </li>

            {currentPage >= 5 &&
                <>
                    <li onClick={() => onChangePage(1)} >
                        <a href="#">
                            1
                        </a>
                    </li>
                    <li onClick={() => handleClickNext()} >
                        <a className='disable' href="#">
                            ...
                        </a>
                    </li>

                </>
            }
            {pageNumbers.map(number => (
                <li key={number} >
                    <a onClick={() => onChangePage(number)} href='#' className={currentPage === number ? ' active' : ''}>
                        {number}
                    </a>
                </li>
            ))}

            {currentPage <= maxPages - 4 &&
                <>
                    <li >
                        <a className='disable' href="#">
                            ...
                        </a>
                    </li>
                    <li onClick={() => onChangePage(maxPages)} >
                        <a href="#">
                            {maxPages}
                        </a>
                    </li>
                </>
            }

            <li onClick={() => handleClickNext()} className={currentPage === maxPages ? 'pagination__direction pagination__direction_disable' : 'pagination__direction'}>
                Вперед
            </li>
        </ul>
    );
};