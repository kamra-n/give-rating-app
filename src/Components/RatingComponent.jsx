import { useState, useContext } from "react";
import { v4 as uuidv4 } from 'uuid';

import AppContext from '../Context/AppContext';


export default function RatingComponent() {
  const { addFeedback } = useContext(AppContext);
  const ratingArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const [rating, setRating] = useState('');
  const [message, setMessage] = useState('');
  console.log(rating)


  const formHandler = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const obj = {
      id,
      rating,
      message
    }
    addFeedback(obj)
    setMessage('')
  }
  return (
    <div className="card bg-white rounded-lg md:px-20 md:py-10 m-[2rem,0px] relative text-black flex flex-col justify-evenly sm:py-[1rem] sm:px-[2rem]">
      <h1 className="text-center font-bold text-xl md:text-2xl my-6">How Would you rate our service with us?</h1>
      <form onSubmit={formHandler}>
        <div className="flex justify-between my-2 px-[0.5rem]">
          {ratingArray.map((v, i) => {
            return (
              <div key={i}>
                <input type='button' value={v} onClick={(e) => (setRating(e.target.value))} className='cursor-pointer bg-gray-300 w-[2rem] h-[2rem] mx-[0.2rem] px-[0.5rem] md:w-12 md:h-12 flex justify-center items-center rounded-full  hover:bg-pink-400 hover:text-white box-border' />
              </div>
            )
          })}

        </div>
        <div className="mt-4 relative">
          <input type='text' value={message} onChange={(e) => { setMessage(e.target.value) }} placeholder='write a review' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-8 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          <button className="bg-gray-50 border border-gray-300 py-2 px-4 rounded-lg absolute bottom-[4px] right-[5px]" disabled={message.trim().length <= 4 ? true : false}>Submit</button>
        </div>
      </form>
      <div className="bg-red-400 rounded-xl px-8 py-2 text-white mt-9 text-center ease-out duration-300" style={message.trim().length && message.trim().length <= 4 ? { display: 'block' } : { display: 'none' }}><p>Please write at least 8 characters</p></div>
    </div>
  )
}
