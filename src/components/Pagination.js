function Pagination({ products, onPageSelect, page }) { 

  const handleClick = (page) => { 
    console.log('PAGE:', page);
    onPageSelect(page);
  }

  return (
    <div>
      {products.length > 0 && <div className="pagination">
        <span onClick={() => handleClick(page - 1)} className={page > 1 ? "" : "pagination__disable"}>◀</span>

        {[...Array(Math.round(products.length / 20))].map((_, i) => {
          return <span key={i} className={page === i + 1 ? "pagination__selected" : ""} onClick={() => handleClick(i + 1)}>{i + 1}</span>
        })}

        <span onClick={() => handleClick(page + 1)} className={page < products.length / 20 ? "" : "pagination__disable"}>▶</span>
      </div>}
    </div>
  );
}

export default Pagination;