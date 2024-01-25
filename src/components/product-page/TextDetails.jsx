const TextDetails = ({ features, box }) => {
  return (
    <div>
      {features.map(feature => <p key={features.indexOf(feature)}>{feature}</p>)}
      <ul>
        {box.map(item => <li key={item.item}>{item.quantity}x {item.item}</li>)}
      </ul>
    </div>
  )
}

export default TextDetails