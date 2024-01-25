const TextDetails = ({ features, box }) => {
  return (
    <div>
      <p>{features}</p>
      <ul>
        {box.map(item => <li key={item.item}>{item.quantity}x {item.item}</li>)}
      </ul>
    </div>
  )
}

export default TextDetails