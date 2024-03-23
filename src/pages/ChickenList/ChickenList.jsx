// css
import './ChickenList.css'

const ChickenList = (props) => {
  return (
    <main className="list">
      <h1>CHICKEN LIST</h1>

      {!props.chickens.length && <h2>Oops! No chickens here! 😢</h2>}

      <ul>
        {props.chickens.map(chicken => (
          <li key={chicken._id}>
            {chicken.name}
          </li>
        ))}
      </ul>

    </main>
  )
}

export default ChickenList