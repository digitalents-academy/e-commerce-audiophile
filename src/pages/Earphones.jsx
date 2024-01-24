import Catalog from '../components/shared/Catalog'
import Advert from '../components/shared/Advert'
import CategoryTitle from '../components/shared/CategoryTitle'

const Earphones = () => {
  return (
    <>
      <CategoryTitle title="Earphones" />
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