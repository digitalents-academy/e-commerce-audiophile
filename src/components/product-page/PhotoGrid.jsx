const PhotoGrid = ({ imageFolder }) => {
  return (
    <div>
      <img src={"../../../assets/" + imageFolder + "/desktop/image-gallery-1.jpg"} alt="" />
      <img src={"../../../assets/" + imageFolder + "/desktop/image-gallery-2.jpg"} alt="" />
      <img src={"../../../assets/" + imageFolder + "/desktop/image-gallery-3.jpg"} alt="" />
    </div>
  )
}

export default PhotoGrid