const PhotoGrid = ({ imageFolder }) => {
  return (
    <div className="photo-grid">
      <picture className="item-one">
        <source media="(min-width:768px) and (max-width:1440px)" srcSet={"../../../assets/" + imageFolder + "/tablet/image-gallery-1.jpg"} />
        <source media="(min-width: 1440px)" srcSet={"../../../assets/" + imageFolder + "/desktop/image-gallery-1.jpg"} />
        <img src={"../../../assets/" + imageFolder + "/mobile/image-gallery-1.jpg"} />
      </picture>
      <picture className="item-two">
        <source media="(min-width:768px) and (max-width:1440px)" srcSet={"../../../assets/" + imageFolder + "/tablet/image-gallery-2.jpg"} />
        <source media="(min-width: 1440px)" srcSet={"../../../assets/" + imageFolder + "/desktop/image-gallery-2.jpg"} />
        <img src={"../../../assets/" + imageFolder + "/mobile/image-gallery-2.jpg"} />
      </picture>
      <picture className="item-three">
        <source media="(min-width:768px) and (max-width:1440px)" srcSet={"../../../assets/" + imageFolder + "/tablet/image-gallery-3.jpg"} />
        <source media="(min-width: 1440px)" srcSet={"../../../assets/" + imageFolder + "/desktop/image-gallery-3.jpg"} />
        <img src={"../../../assets/" + imageFolder + "/mobile/image-gallery-3.jpg"} />
      </picture>
    </div>
  )
}

export default PhotoGrid