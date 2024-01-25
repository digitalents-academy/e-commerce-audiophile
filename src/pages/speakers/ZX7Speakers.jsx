import BackButton from "../../components/product-page/BackButton"
import PhotoGrid from "../../components/product-page/PhotoGrid"
import OtherProducts from "../../components/product-page/OtherProducts"
import PhotoDetails from "../../components/product-page/PhotoDetails"
import TextDetails from "../../components/product-page/TextDetails"

import Catalog from "../../components/shared/Catalog"
import Advert from "../../components/shared/Advert"

const ZX7Speakers = () => {
  const data = {
      imageFolder: "product-zx7-speaker",
      name: "ZX7 Speaker",
      new: false,
      price: 3500,
      description: "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
      features: [
        "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.",
        "The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience."
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
          item: "3.5mm 7.5m Audio Cable"
        },
        {
          quantity: 1,
          item: "7.5m Optical Cable"
        }
      ],
      others: [
        {
          name: "ZX9 Speaker",
          url: "/speakers/zx9-speakers",
          image: "image-zx9-speaker.jpg"
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

export default ZX7Speakers