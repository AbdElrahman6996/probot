import React from 'react'

const Cards = ({  imgPath, position, title, description }) => {
  return (
    <section>
        <div className='container-bg'>
            <div>
                <img src={imgPath} alt="" />
            </div>
            <div className="texter-container">
                
            </div>
        </div>
    </section>
  )
}

export default Cards