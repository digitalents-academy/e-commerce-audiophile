import Catalog from '../components/shared/Catalog'
import Advert from '../components/shared/Advert'
import CategoryTitle from '../components/category-page/CategoryTitle'
import CategoryProduct from '../components/category-page/CategoryProduct'

import zx9desktop from '../../assets/category-speakers/desktop/image-zx9.jpg'
import zx9tablet from '../../assets/category-speakers/tablet/image-zx9.jpg'
import zx9mobile from '../../assets/category-speakers/mobile/image-zx9.jpg'

import zx7desktop from '../../assets/category-speakers/desktop/image-zx7.jpg'
import zx7tablet from '../../assets/category-speakers/tablet/image-zx7.jpg'
import zx7mobile from '../../assets/category-speakers/mobile/image-zx7.jpg'

const Speakers = () => {
  const data = [
    {
      name: "ZX9",
      category: "Speakers",
      new: true,
      description: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      image: "image-zx9.jpg",
      link: "zx9-speakers"
    },
    {
      name: "ZX7",
      category: "Speakers",
      new: false,
      description: "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
      image: "image-zx7.jpg",
      link: "zx7-speakers"
    },
  ]

  return (
    <>
      <CategoryTitle title="Speakers" />
      <div id="products" className='more-gap'>
        <CategoryProduct data={data[0]} right={true} desktop={zx9desktop} tablet={zx9tablet} mobile={zx9mobile} />
        <CategoryProduct data={data[1]} right={false} desktop={zx7desktop} tablet={zx7tablet} mobile={zx7mobile} />
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

export default Speakers