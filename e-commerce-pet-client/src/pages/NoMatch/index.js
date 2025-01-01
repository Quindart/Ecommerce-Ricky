import React from 'react'
import Button from '../../components/Button'
import { Icon } from '@iconify/react'
const NoMatch = () => {
  return (
    <div className="no-match">
      <div className="no-match__img">
        <img src="/404ErrorImg.png" alt="" className="img-fluid" />
        <div className="no-match__button">
          <Button htmlType="link" type="primary" url="/">
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

export default NoMatch
