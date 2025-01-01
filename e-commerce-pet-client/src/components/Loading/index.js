import React from 'react'

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading__container"></div>
      <div className="loading__img">
        <img src="/cat-spinner.gif" alt="" className="img-fluid" />
      </div>
    </div>
  )
}

export default Loading
