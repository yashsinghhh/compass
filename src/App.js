import React from 'react'


import { Footer,Header,Features,Blog,Possibility,WhatGPT,Page_2,Features4} from './containers';
import { Cta,Brand,Navbar} from './components';
import './App.css';




const App = () => {
  return (
    <div>
      <div className='App'>
        <div className='gradient_bg'>
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT />
        <Features />
        <Page_2/>
        {/* <Features /> */}
        <Possibility />
        <Cta />
        <Features4/>
        <Blog />
        <Footer />
      </div>


    </div>
  )
}

export default App