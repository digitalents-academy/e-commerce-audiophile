import BackButton from "../../components/product-page/BackButton"
import PhotoGrid from "../../components/product-page/PhotoGrid"
import OtherProducts from "../../components/product-page/OtherProducts"
import PhotoDetails from "../../components/product-page/PhotoDetails"
import TextDetails from "../../components/product-page/TextDetails"

import Catalog from "../../components/shared/Catalog"
import Advert from "../../components/shared/Advert"
import { useOutletContext } from "react-router-dom"

const YX1Wireless = () => {
  const { addToCart } = useOutletContext()
  const data = {
      imageFolder: "product-yx1-earphones",
      name: "YX1 Wireless Earphones",
      new: true,
      price: 599,
      description: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
      features: [
        "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.",
        "The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black."
      ],
      box: [
        {
          quantity: 2,
          item: "Earphone Unit"
        },
        {
          quantity: 6,
          item: "Multi-Size Earplugs"
        },
        {
          quantity: 1,
          item: "User Manual"
        },
        {
          quantity: 1,
          item: "USB-C Charging Cable"
        },
        {
          quantity: 1,
          item: "Travel Pouch"
        }
      ],
      others: [
        {
          name: "XX99 Mark I",
          url: "/headphones/xx99-mark-one-headphones",
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
      ],
      cartData: {
        shortName: "YX1",
        cartImage: "image-yx1-earphones.jpg",
        price: 599
      }
  }


  return (
    <>
      <div id="products" className="more-gap">
        <BackButton />
        <PhotoDetails imageFolder={data.imageFolder} name={data.name} isNew={data.new} price={data.price} description={data.description} addToCart={addToCart} cartData={data.cartData} />
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

export default YX1Wireless