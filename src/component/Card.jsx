import { AiFillStar } from "react-icons/ai"
import styles from './styles.module.css'
import Button from './Button'
import { useState } from "react"

const Card = () => {

  const [hasRating, setHasRating] = useState(null)

  const numbers = [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    { id: 5, value: 5 }]

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('ive been clicked')
    const rating = getFormData()
    if (rating === null) {
      setHasRating(false)
    }
  }

  const getFormData = () => {
    let ratingForm = document.getElementById('ratingForm')
    let formData = new FormData(ratingForm)
    const rating = formData.get('rating')
    console.log(rating)
    return rating
  }
  // if not rating chosen ned to prevent next component loading.
  return (

    <div className={styles.cardWrapper}>
      <div className={styles.star}><AiFillStar /></div>
      <h1>How did we do?</h1>
      <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <form id="ratingForm" onSubmit={handleSubmit}>
        {numbers.map((number) => {
          return (
            <>
              <input key={`rating_${numbers.value}`} type="radio" id={number.id} name="rating" value={number.value} />
              <label key={`ratings_${numbers.value}`} htmlFor={number.id}>{number.value}</label>
            </>
          )
        })}
        <Button type="submit" className={styles.submit}>SUBMIT</Button>
      </form>
    </div >
  )
}

export default Card