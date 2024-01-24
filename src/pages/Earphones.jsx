import Catalog from '../components/shared/Catalog'
import Advert from '../components/shared/Advert'
import CategoryTitle from '../components/shared/CategoryTitle'
import CategoryProduct from '../components/shared/CategoryProduct'

const Earphones = () => {
  const data = [
    {
      name: "YX1 Wireless",
      category: "Earphones",
      new: true,
      description: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
      image: "image-yx1-earphones.jpg",
      link: "yx1-earphones"
    },
  ]

  return (
    <>
      <CategoryTitle title="Earphones" />
      <div id="products" className='more-gap'>
        <CategoryProduct data={data[0]} right={true} />
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

export default Earphones