const ChickenCard = ({ chicken, handleRemoveChicken }) => {
  return (
    <li>
      <section>
        <button onClick={() => handleRemoveChicken(chicken._id)}>
          X
        </button>
      </section>
      <h2>{chicken.name.toUpperCase()}</h2>
      <p>A {chicken.age}-year-old {chicken.breed}</p>
    </li>
  )
}

export default ChickenCard