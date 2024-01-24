import Catalog from '../components/shared/Catalog'
import Advert from '../components/shared/Advert'
import CategoryTitle from '../components/shared/CategoryTitle'

const Speakers = () => {
  return (
    <>
      <CategoryTitle title="Speakers" />
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