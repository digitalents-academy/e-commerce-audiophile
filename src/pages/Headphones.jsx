import Catalog from '../components/shared/Catalog'
import Advert from '../components/shared/Advert'
import CategoryTitle from '../components/shared/CategoryTitle'

const Headphones = () => {
  return (
    <>
      <CategoryTitle title="Headphones" />
    <div className='non-flex'>
      <Catalog />
    </div>
    <div className='non-flex'>
      <Advert />
    </div>
    </>
  )
}

export default Headphones