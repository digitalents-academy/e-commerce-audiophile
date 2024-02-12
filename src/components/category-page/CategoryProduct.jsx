import { Link } from "react-router-dom"

const CategoryProduct = ({ data, right, desktop, tablet, mobile }) => {
  return (
    <div className={"category-product " + (right ? "" : "category-odd")}>
      <div className="product-details">
        <h4>{data.new ? "New Product" : ""}</h4>
        <h3>{data.name} {data.category}</h3>
        <p>{data.description}</p>
        <Link to={data.link}>See Product</Link>
      </div>
      <div>
      <picture>
        <source media="(min-width:768px) and (max-width:1440px)" srcSet={tablet} />
        <source media="(min-width: 1440px)" srcSet={desktop} />
        <img src={mobile} alt={data.name + " " + data.category} />
      </picture>
      </div>
    </div>
  )
}

export default CategoryProduct