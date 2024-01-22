import { Link } from "react-router-dom";

const Catalog = () => {
  return (
    <div id="catalog">
      <Link to={`/headphones`}>
        <img src="../assets/shared/desktop/image-headphones.png" alt="" className="catalog-image" />
        <h4>Headphones</h4>
        <div><span>Shop</span> <img src="../assets/shared/desktop/icon-arrow-right.svg" alt="" className="catalog-arrow" /></div>
      </Link>
      <Link to={`/speakers`}>
        <img src="../assets/shared/desktop/image-speakers.png" alt="" className="catalog-image" />
        <h4>Speakers</h4>
        <div><span>Shop</span> <img src="../assets/shared/desktop/icon-arrow-right.svg" alt="" className="catalog-arrow" /></div>
      </Link>
      <Link to={`/earphones`}>
        <img src="../assets/shared/desktop/image-earphones.png" alt="" className="catalog-image" />
        <h4>Earphones</h4>
        <div><span>Shop</span> <img src="../assets/shared/desktop/icon-arrow-right.svg" alt="" className="catalog-arrow" /></div>
      </Link>
    </div>
  )
};

export default Catalog;
