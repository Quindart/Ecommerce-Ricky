const ProductProgress = () => {
  return (
    <>
      <div className="product-card__progress">
        <div className="progress">
          <div className="progress__inner"></div>
        </div>
        <div className="product-card__progress-text">
            <div className="product-card__progress-sold">
                Sold:
                <span className="product-card__progress-sold--amount"> 3</span>
            </div>
            <div className="product-card__progress-available">
                Available:
                <span className="product-card__progress-available--amount"> 47</span>
            </div>
        </div>
      </div>
    </>
  )
}
export default ProductProgress;
