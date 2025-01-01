import React from 'react'
import Button from '../../components/Button'
import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'

const Undeveloped = () => {
  const navigate = useNavigate()
  return (
    <div className="undeveloped">
      <div className="undeveloped__img">
        <img src="/undeveloped.png" alt="" className="img-fluid" />
        <h1>This feature is currently not under development</h1>
        <div className="undeveloped__button">
          <Button
            htmlType="link"
            type="primary"
            url="/"
            onClick={navigate('/')}
          >
            <span>
              <Icon icon="typcn:arrow-back" />
            </span>
            Go Back Home
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Undeveloped
