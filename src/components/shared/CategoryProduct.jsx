import { Link } from "react-router-dom"

const CategoryProduct = ({ data, right }) => {
  return (
    <div className={"category-product " + (right ? "" : "category-odd")}>
      <div>
      <h4>{data.new ? "New Product" : ""}</h4>
      <h3>{data.name} {data.category}</h3>
      <p>{data.description}</p>
      <Link to={data.link}>See Product</Link>
      </div>
      <picture>
        <source media="(min-width:768px) and (max-width:1440px)" srcSet={"../../assets/category-" + data.category + "/tablet/" + data.image} />
        <source media="(min-width: 1440px)" srcSet={"../../assets/category-" + data.category + "/desktop/" + data.image} />
        <img src={"../../assets/category-" + data.category + "/mobile/" + data.image} alt={data.name + " " + data.category} />
      </picture>
    </div>
  )
}

export default CategoryProduct