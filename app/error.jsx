'use client' // Error components must be Client Components
 import styles from "./error.module.css";
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className={styles.error}>
      <h2>Something went wrong!</h2>
      <p>This may occurs due to the limited Api call!! Sorry for your inconvinence!! <br></br>We will update it sooner :)</p>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}