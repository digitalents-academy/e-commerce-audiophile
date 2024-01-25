import BackButton from "../../components/product-page/BackButton"
import PhotoGrid from "../../components/product-page/PhotoGrid"
import OtherProducts from "../../components/product-page/OtherProducts"
import PhotoDetails from "../../components/product-page/PhotoDetails"
import TextDetails from "../../components/product-page/TextDetails"

import Catalog from "../../components/shared/Catalog"
import Advert from "../../components/shared/Advert"

const XX99Mark2 = () => {
  const data = {
      imageFolder: "product-xx99-mark-two-headphones",
      name: "XX99 Mark II Headphones",
      new: true,
      price: 2999,
      description: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      features: "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.\n\nThe advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
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
        {
          quantity: 1,
          item: "Travel Back"
        }
      ],
      others: [
        {
          name: "XX99 Mark I",
          url: "/",
          image: "image-xx99-mark-one-headphones.jpg"
        },
        {
          name: "XX59",
          url: "/",
          image: "image-xx59-headphones.jpg"
        },
        {
          name: "ZX9 Speaker",
          url: "/",
          image: "image-zx9-speaker.jpg"
        }
      ]
    }


  return (
    <>
      <div id="products" className="more-gap">
        <BackButton />
        <PhotoDetails imageFolder={data.imageFolder} name={data.name} new={data.new} price={data.price} description={data.description} />
        <TextDetails features={data.features} box={data.box} />
        <PhotoGrid data={data.imageFolder} />
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

export default XX99Mark2