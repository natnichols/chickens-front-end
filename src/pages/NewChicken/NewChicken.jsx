// npm modules
import { useState } from 'react'

// css
import './NewChicken.css'

const NewChicken = (props) => {
  const [form, setForm] = useState({
    name: '',
    breed: '',
    age: 0,
    color: 'Red',
  })

  const handleChange = (evt) => {
    setForm({...form, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleAddChicken(form)
  }

  return (
    <main className="new">
      <h1>NEW CHICKEN</h1>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="name-input">Name</label>
        <input 
          required
          type="text" 
          name="name" 
          id="name-input" 
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />

        <label htmlFor="age-input">Age</label>
        <input 
          required
          min="0"
          type="number" 
          name="age" 
          id="age-input" 
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
        />

        <label htmlFor="breed-input">Breed</label>
        <input 
          required
          type="text" 
          name="breed" 
          id="breed-input" 
          placeholder="Breed"
          value={form.breed}
          onChange={handleChange}
        />

        <label htmlFor="color-input">Color</label>
        <select 
          required 
          name="color" 
          id="color-input"
          value={form.color}
          onChange={handleChange}
        >
          <option value="Red">Red</option>
          <option value="White">White</option>
          <option value="Black">Black</option>
          <option value="Tan">Tan</option>
          <option value="Speckled">Speckled</option>
        </select>

        <button type="submit">SUBMIT</button>

      </form>
    </main>
  )
}

export default NewChicken