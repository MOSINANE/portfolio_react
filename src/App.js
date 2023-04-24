import React from 'react'
import Navbar from './component/Navbar'
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Home from './component/Acceuil'
import Formations from './component/Formations'
import Certication from './component/Certication'
import Projet from './component/Projet'
import Expérience from './component/Expérience'
import Header from './component/Header'
import Footer from './component/Footer'
import img1 from './component/images/IMG-2421.jpg'

const App = () => {
  return (
      <section className='hero'>
        <>
          <Router>
            <header className="header" style={{backgroundImage: "linear-gradient(SlateBlue,Indigo)", color: "darkred",}}>

              <div>
                <img src={img1} alt="cur" style={{width: 300, height: 300,borderRadius: 400/ 2}} ></img>
              </div>
              <h2 className='persoName'>El Messoussi Mohamed Sinane</h2>
              <p className='statu'> Étudiant Ingénieur En Informatique Et Réseau</p>
            </header>
            <Navbar />
            <Switch>
              <Route  exact path='/' compontent={Home}  > <Home /> </Route>
              <Route path="/Formations" compontent={Formations}  > <Formations /> </Route>
              <Route path='/Certication' compontent={Certication}  > <Certication /> </Route>
              <Route path='/Projet' compontent={Projet}  > <Projet /> </Route>
              <Route path='/Expérience' compontent={Expérience}  > <Expérience /> </Route>

            </Switch>
          </Router>
          <Footer></Footer>
        </>

      </section>
  )

}

export default App