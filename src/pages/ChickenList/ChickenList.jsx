// components
import ChickenCard from '../../components/ChickenCard'

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
            <ChickenCard chicken={chicken} key={chicken._id} />
          </li>
        ))}
      </ul>

    </main>
  )
}

export default ChickenList