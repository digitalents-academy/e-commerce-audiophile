import Catalog from '../components/shared/Catalog'
import Advert from '../components/shared/Advert'
import CategoryTitle from '../components/shared/CategoryTitle'
import CategoryProduct from '../components/shared/CategoryProduct'

const Headphones = () => {
  const data = [
    {
      name: "XX99 Mark II",
      category: "Headphones",
      new: true,
      description: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      image: "image-xx99-mark-two.jpg"
    },
    {
      name: "XX99 Mark I",
      category: "Headphones",
      new: false,
      description: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
      image: "image-xx99-mark-one.jpg"
    },
    {
      name: "XX59",
      category: "Headphones",
      new: false,
      description: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
      image: "image-xx59.jpg"
    }
  ]
  return (
    <>
      <CategoryTitle title="Headphones" />
      <div id="products">
        <CategoryProduct data={data[0]} right={true} />
        <CategoryProduct data={data[1]} right={false} />
        <CategoryProduct data={data[2]} right={true} />
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

export default Headphones