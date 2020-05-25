import React from 'react'
import proptypes from 'prop-types'
import './ContestPreview.scss'

const ContestPreview = ({contest}) => {
  return (
    <div className='text-secondary'>
            {contest.categoryName}
            <br/>
            {contest.contestName}
    </div>
    
  )
}
ContestPreview.propTypes = {
  contest: proptypes.object.isRequired
}

export default ContestPreview
