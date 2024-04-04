import React from 'react'
import './Microcomponents/Loading.css';
import {Spinner} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Loading = () => {
  return (
    <div className='loading'>

    <Spinner color='warning' className='spinnerReactstrap'/>

    </div>
  )
}

export default Loading