const PhotoDetails = ({ imageFolder, name, isNew, price, description }) => {
  const formattedPrice = price.toString().replace(/(?<=\d)(?=(\d\d\d)+(?!\d))/g, ",")
  return (
    <div>
      <img src={"../../../assets/" + imageFolder + "/desktop/image-product.jpg"} />
      {isNew ? "New Product" : ""} <br />
      {name} <br />
      {description} <br />
      $ {formattedPrice}
      {/* TODO: product counter and add to cart button */}
    </div>
  )
}

export default PhotoDetails