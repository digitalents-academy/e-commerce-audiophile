import BackButton from "../../components/product-page/BackButton"
import PhotoGrid from "../../components/product-page/PhotoGrid"
import OtherProducts from "../../components/product-page/OtherProducts"
import PhotoDetails from "../../components/product-page/PhotoDetails"
import TextDetails from "../../components/product-page/TextDetails"

import Catalog from "../../components/shared/Catalog"
import Advert from "../../components/shared/Advert"
import { useOutletContext } from "react-router-dom"

const ZX9Speakers = () => {
  const data = {
      imageFolder: "product-zx9-speaker",
      name: "ZX9 Speaker",
      new: true,
      price: 4500,
      description: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      features: [
        "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).",
        "Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms."
      ],
      box: [
        {
          quantity: 2,
          item: "Speaker Unit"
        },
        {
          quantity: 2,
          item: "Speaker Cloth Panel"
        },
        {
          quantity: 1,
          item: "User Manual"
        },
        {
          quantity: 1,
          item: "3.5mm 10m Audio Cable"
        },
        {
          quantity: 1,
          item: "10m Optical Cable"
        }
      ],
      others: [
        {
          name: "ZX7 Speaker",
          url: "/speakers/zx7-speakers",
          image: "image-zx7-speaker.jpg"
        },
        {
          name: "XX99 Mark I",
          url: "/headphones/xx99-mark-one-headphones",
          image: "image-xx99-mark-two-headphones.jpg"
        },
        {
          name: "XX59",
          url: "/headphones/xx59-headphones",
          image: "image-xx59-headphones.jpg"
        }
      ],
      cartData: {
        shortName: "ZX9",
        cartImage: "image-zx9-speaker.jpg",
        price: 4500
      }
  }


  return (
    <>
      <div id="products" className="more-gap">
        <BackButton />
        <PhotoDetails imageFolder={data.imageFolder} name={data.name} isNew={data.new} price={data.price} description={data.description} addToCart={useOutletContext()} cartData={data.cartData} />
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

export default ZX9Speakers