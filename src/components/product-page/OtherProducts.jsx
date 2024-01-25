import { Link } from "react-router-dom"

const OtherProducts = ({ data }) => {
  return (
    <div>
      You May Also Like <br />
      <div>
        <img src={"../../../assets/shared/desktop/" + data[0].image} alt="" />
        {data[0].name} <br />
        <Link to={data[0].url}>See Product</Link>
      </div>
      <div>
        <img src={"../../../assets/shared/desktop/" + data[1].image} alt="" />
        {data[1].name} <br />
        <Link to={data[1].url}>See Product</Link>
      </div>
      <div>
        <img src={"../../../assets/shared/desktop/" + data[2].image} alt="" />
        {data[2].name} <br />
        <Link to={data[2].url}>See Product</Link>
      </div>
    </div>
  )
}

export default OtherProducts