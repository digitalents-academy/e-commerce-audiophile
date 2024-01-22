import Hero from '../components/home/Hero'
import Advert from '../components/shared/Advert'
import Catalog from '../components/shared/Catalog'
import YX1Earphones from '../components/home/YX1Earphones'
import ZX7Speaker from '../components/home/ZX7Speaker'
import ZX9Speaker from '../components/home/ZX9Speaker'

const Home = () => {
  return (
    <>
    <div id="hero-container">
      <Hero />
    </div>
    <div className='non-flex'>
      <Catalog />
    </div>
      <div id="products">
      <ZX9Speaker />
      <ZX7Speaker />
      <YX1Earphones />
      </div>
      <div className='non-flex'>
      <Advert />
      </div>
    </>
  )
}

export default Home
