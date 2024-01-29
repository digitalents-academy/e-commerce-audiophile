import { Link } from "react-router-dom"

const OtherProducts = ({ data }) => {
  return (
    <div>
      <h4 id="other-products">You May Also Like</h4>
      <div className="product-flex">
      <div>
      <picture>
        <source media="(min-width:768px) and (max-width:1440px)" srcSet={"../../../assets/shared/tablet/" + data[0].image} />
        <source media="(min-width: 1440px)" srcSet={"../../../assets/shared/desktop/" + data[0].image} />
        <img src={"../../../assets/shared/mobile/" + data[0].image} />
      </picture>
        <h5>{data[0].name}</h5>
        <Link to={data[0].url}>See Product</Link>
      </div>
      <div>
      <picture>
        <source media="(min-width:768px) and (max-width:1440px)" srcSet={"../../../assets/shared/tablet/" + data[1].image} />
        <source media="(min-width: 1440px)" srcSet={"../../../assets/shared/desktop/" + data[1].image} />
        <img src={"../../../assets/shared/mobile/" + data[1].image} />
      </picture>
        <h5>{data[1].name}</h5>
        <Link to={data[1].url}>See Product</Link>
      </div>
      <div>
      <picture>
        <source media="(min-width:768px) and (max-width:1440px)" srcSet={"../../../assets/shared/tablet/" + data[2].image} />
        <source media="(min-width: 1440px)" srcSet={"../../../assets/shared/desktop/" + data[2].image} />
        <img src={"../../../assets/shared/mobile/" + data[2].image} />
      </picture>
        <h5>{data[2].name}</h5>
        <Link to={data[2].url}>See Product</Link>
      </div>
      </div>
    </div>
  )
}

export default OtherProducts