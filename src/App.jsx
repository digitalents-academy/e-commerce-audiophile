import './index.css'
import Hero from './components/home/Hero'
// import ZX9Speaker from './components/home/ZX9Speaker'
// import ZX7Speaker from './components/home/ZX7Speaker'
// import YX1Earphones from './components/home/YX1Earphones'
import Catalog from './components/shared/Catalog'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      {/* <ZX9Speaker />
      <ZX7Speaker />
      <YX1Earphones /> */}
      <Catalog />
      <Footer />
    </div>
  )
}

export default App
