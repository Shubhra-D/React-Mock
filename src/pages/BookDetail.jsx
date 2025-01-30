import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BookDetail = () => {
  const {id} = useParams();
  console.log(id)
  const [book,setBook] = useState(null)
  const [isLoading,setIsLoading] = useState(false)
  
  const fetchBook = ()=>{
    isLoading(true)
    axios({
      url:`https://peppermint-carnelian-captain.glitch.me/books/${id}`,
       method:"GET"
    }).then((res)=>{
      setBook(res.data)
      console.log(res.data)
    }).catch((err)=>{
      console.log(err)
    }).finally(()=>{
      setIsLoading(false)
    })
  }
  useEffect(()=>{
    fetchBook()
  },[id])
  
  
  return (
    <div className='book-card'>
        <img src={book.coverImage} alt='img'/>
        <h2> {book.name}</h2>
        <h3>{book.category}</h3>
        <p>Author : {book.author}</p>
        <p>Description : {book.description}</p>
        <p>P.year : {book.publishingYear}</p>
    </div>
  )
}

export default BookDetail
