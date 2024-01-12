const Catalog = () => {
  return (
    <div id="catalog">
      <a href="/">
        <img src="../assets/shared/desktop/image-headphones.png" alt="" className="catalog-image" />
        <h4>Headphones</h4>
        <div><span>Shop</span> <img src="../assets/shared/desktop/icon-arrow-right.svg" alt="" className="catalog-arrow" /></div>
      </a>
      <a href="/">
        <img src="../assets/shared/desktop/image-speakers.png" alt="" className="catalog-image" />
        <h4>Speakers</h4>
        <div><span>Shop</span> <img src="../assets/shared/desktop/icon-arrow-right.svg" alt="" className="catalog-arrow" /></div>
      </a>
      <a href="/">
        <img src="../assets/shared/desktop/image-earphones.png" alt="" className="catalog-image" />
        <h4>Earphones</h4>
        <div><span>Shop</span> <img src="../assets/shared/desktop/icon-arrow-right.svg" alt="" className="catalog-arrow" /></div>
      </a>
    </div>
  )
};

export default Catalog;
