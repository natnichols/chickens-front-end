const ChickenCard = ({ chicken }) => {
  return (
    <li>
      <section>
        <button>
          X
        </button>
      </section>
      <h2>{chicken.name.toUpperCase()}</h2>
      <p>A {chicken.age}-year-old {chicken.breed}</p>
    </li>
  )
}

export default ChickenCard