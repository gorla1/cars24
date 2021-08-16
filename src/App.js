import React  from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import { Container } from '@material-ui/core'
import Cars from './components/Cars'



// import Footer from './components/Footer'



export default function App() {
   

  return (
    <div>
    
      <Container>
       <Header/>
        <Body/>
        <Cars/>
        <Footer/>
        </Container>
      
    </div>
  )
}
