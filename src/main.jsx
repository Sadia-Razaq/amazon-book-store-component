import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import {data} from './data';






const BookList = () => {
  return(
    <>
    <div className="list">
      {data.map((item)=>{
        return (
          <>
          {/* here we can access props of book by using item. because our data is stored in item. */}
          {/* <Book  id = {item.id} title = {item.title} img = {item.img}/> */}

          {/* but if an object has too many properties so it will mess up. so here we'll say take all the props of Book and show them here. for that purpose we'll use spread operator. */}
          <Book  {...item}/>
          </>
        )
      })}

   </div>
    </>
  )
}


const Book = ({title, img, price}) => {
  return(
    <>
    <div className="book">
   <img height={250} width={200} src={img} />
   <h2>{title}</h2>
   <h5>${price}</h5>
   </div>
    </>
  )
}




ReactDOM.render(<BookList />, document.querySelector('#root'));