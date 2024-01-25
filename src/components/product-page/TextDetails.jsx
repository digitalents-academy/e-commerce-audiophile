const TextDetails = ({ features, box }) => {
  return (
    <div className="text-details">
      <div>
        <h4>Features</h4>
      {features.map(feature => <p key={features.indexOf(feature)}>{feature}</p>)}
      </div>
      <ul>
        <h4>In The Box</h4>
        {box.map(item => <li key={item.item}><span className="orange-quantity">{item.quantity}x</span> {item.item}</li>)}
      </ul>
    </div>
  )
}

export default TextDetails