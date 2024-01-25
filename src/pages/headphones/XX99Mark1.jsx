import BackButton from "../../components/product-page/BackButton"
import PhotoGrid from "../../components/product-page/PhotoGrid"
import OtherProducts from "../../components/product-page/OtherProducts"
import PhotoDetails from "../../components/product-page/PhotoDetails"
import TextDetails from "../../components/product-page/TextDetails"

import Catalog from "../../components/shared/Catalog"
import Advert from "../../components/shared/Advert"

const XX99Mark1 = () => {
  const data = {
      imageFolder: "product-xx99-mark-one-headphones",
      name: "XX99 Mark I Headphones",
      new: false,
      price: 1750,
      description: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
      features: [
        "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.",
        "From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is includes with a balanced gold connector."
      ],
      box: [
        {
          quantity: 1,
          item: "Headphone Unit"
        },
        {
          quantity: 2,
          item: "Replacement Earcups"
        },
        {
          quantity: 1,
          item: "User Manual"
        },
        {
          quantity: 1,
          item: "3.5mm 5m Audio Cable"
        },
      ],
      others: [
        {
          name: "XX99 Mark II",
          url: "/headphones/xx99-mark-two-headphones",
          image: "image-xx99-mark-two-headphones.jpg"
        },
        {
          name: "XX59",
          url: "/headphones/xx59-headphones",
          image: "image-xx59-headphones.jpg"
        },
        {
          name: "ZX9 Speaker",
          url: "/speakers/zx9-speakers",
          image: "image-zx9-speaker.jpg"
        }
      ]
  }


  return (
    <>
      <div id="products" className="more-gap">
        <BackButton />
        <PhotoDetails imageFolder={data.imageFolder} name={data.name} isNew={data.new} price={data.price} description={data.description} />
        <TextDetails features={data.features} box={data.box} />
        <PhotoGrid imageFolder={data.imageFolder} />
        <OtherProducts data={data.others} />
      </div>
      <div className='non-flex'>
        <Catalog />
      </div>
      <div className='non-flex'>
        <Advert />
      </div>
    </>
  )
}

export default XX99Mark1