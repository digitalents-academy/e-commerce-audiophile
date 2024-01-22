// import { Link } from "react-router-dom";

const Catalog = () => {
  return (
    // TODO: figure out using links while keeping styling
    <div id="catalog">
      <a href="/headphones">
        <img src="../assets/shared/desktop/image-headphones.png" alt="" className="catalog-image" />
        <h4>Headphones</h4>
        <div><span>Shop</span> <img src="../assets/shared/desktop/icon-arrow-right.svg" alt="" className="catalog-arrow" /></div>
      </a>
      <a href="/speakers">
        <img src="../assets/shared/desktop/image-speakers.png" alt="" className="catalog-image" />
        <h4>Speakers</h4>
        <div><span>Shop</span> <img src="../assets/shared/desktop/icon-arrow-right.svg" alt="" className="catalog-arrow" /></div>
      </a>
      <a href="/earphones">
        <img src="../assets/shared/desktop/image-earphones.png" alt="" className="catalog-image" />
        <h4>Earphones</h4>
        <div><span>Shop</span> <img src="../assets/shared/desktop/icon-arrow-right.svg" alt="" className="catalog-arrow" /></div>
      </a>
    </div>
  )
};

export default Catalog;
