
import React from 'react'

function Objectdemo() {
    const cars={
        name:"Citizen",
        price:"10,0000",
        city:"salem",
        color:"black",
        midel:"2026",
        variant:"shine"
    }
    const {name,price,city,color}=cars
    const updatedCars={
        ...cars,
        model:"2027"
    }
  return (
    <div>
        {updatedCars.price}
    </div>
  )
}

export default Objectdemo