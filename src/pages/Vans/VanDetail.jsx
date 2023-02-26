import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const VanDetail = () => {
  const params = useParams()
  const [detail, setDetail] = useState('')

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then(res => res.json())
      .then(data => setDetail(data.vans))
  }, [params.id])
  

  return (
    <div>
      {detail ? (
        <div className="van-detail">
            <img src={detail.imageUrl} />
            <i className={`van-type ${detail.type} selected`}>{detail.type}</i>
            <h2>{detail.name}</h2>
            <p className="van-price"><span>${detail.price}</span>/day</p>
            <p>{detail.description}</p>
            <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  )
}

export default VanDetail
