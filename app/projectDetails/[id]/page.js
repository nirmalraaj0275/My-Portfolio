
'use client'
import WorkSingle from '@/app/work-single/page'
import React, { useEffect, useState } from 'react'

const page = ({params}) => {
    const id = params.id
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [details, setDetails] = useState([])

    const projectDetails = [
        {
            id: 1,
            name: "amizh"
        },
        {
            id : 2,
            name : "relation"
        }
    ]
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const filteredData = projectDetails.find((item) => item.id === parseInt(id))
        setDetails(filteredData)
    }, [id])
     
    
   
  return (
    <>
    {details ? (
        <>
         <WorkSingle name={details.name} /> 
        </>
        
    ) : (
        <div>no data </div>
    )}
    </>
  )
}

export default page