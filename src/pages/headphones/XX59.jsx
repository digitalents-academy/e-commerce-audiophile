import BackButton from "../../components/product-page/BackButton"
import PhotoGrid from "../../components/product-page/PhotoGrid"
import OtherProducts from "../../components/product-page/OtherProducts"
import PhotoDetails from "../../components/product-page/PhotoDetails"
import TextDetails from "../../components/product-page/TextDetails"

import Catalog from "../../components/shared/Catalog"
import Advert from "../../components/shared/Advert"

const XX59Phone = () => {
  const data = {
      imageFolder: "product-xx59-headphones",
      name: "XX59 Headphones",
      new: false,
      price: 899,
      description: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
      features: [
        "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.",
        "More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C."
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
          name: "XX99 Mark I",
          url: "/headphones/xx99-mark-one-headphones",
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

export default XX59Phone