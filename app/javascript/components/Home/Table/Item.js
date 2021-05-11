import React, { Component } from 'react'
import Thubnail from './Thubnail' 
import styled from 'styled-components'

const Button = styled.a`
  display: inline-block;
  text-dicoration: none;
  font-weigth: bold;
  border-radius: 0;
  background: #fff;
  color: #333 !important;
  padding: 10px 20px;
  font-size: 18px;
  //width: 100%;
  box-shadow: 0px 0px 0px 3px #473228,
  -6px 6px #0B615E,
  -6px 6px 0px 3px #473228;
`

const Item = (props) => {
  return (
   <div className="row pt-4 pb-4">
     <div className="col-md-10 offset-md-1">
      <div >
        <div className="card px-5">
          <div className="row">
            <div className="col-md-4">
              <Thubnail/>
            </div>
            <div className="col-md-8">
              <div className="pt-4 pb-4">
                <h4>{props.title}</h4>
                <p>{props.description}</p>
                <div className="cta-wrapper">
                  <Button onClick={props.handleVideoChange} className="btn cta-btn">Смотреть видео</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
     </div>
    </div>
  </div>
   
  )
}

export default Item 