const CategoryProduct = ({ data, right }) => {

  return (
    <div>
      <div>
      {data.new ? "New Product" : ""}
      {data.name} {data.category}
      {data.description}
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