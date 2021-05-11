import React, { Component } from 'react'
import styled from 'styled-components'

const Section = styled.section`
  background-color: #04B4AE;
  min-height: 550px;
  padding: 100px 0;
  color: #fff;
`

const Header = styled.h1`
  color: #fff;
  font-weight: 700;
  font-size: 40px;
  line-height: 52px;
`

const Change = styled.p`
  font-size: 18px;
  font-weight: 500;
`

const Button = styled.a`
  display: inline-block;
  text-dicoration: none;
  font-weigth: bold;
  border-radius: 0;
  background: #fff;
  color: #333 !important;
  padding: 10px 20px;
  font-size: 18px;
  width: 100%;
  box-shadow: 0px 0px 0px 3px #473228,
    -6px 6px #0B615E,
    -6px 6px 0px 3px #473228;
`

const Jumbotron = () => {
  return (
    <Section className="home-section--1">
      <div className="container">
        <div className="row">
          <div className="col col-sm-12 col-md-5">
            <div className="pt-4 mt-4">
              <Header> Это приложение написано на React и Ruby on Rails</Header>
              <Change> Ruby on Rails c React.js</Change>
              <div className="cta-wrapper">
                <Button className="btn fancy-btn">Старт</Button>
              </div>
            </div>
          </div>
          <div className="col col-sm-12 col-md-7">
            <div className="pt-4 mt-4 text-center">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/iEt_KlnDjpk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Jumbotron 