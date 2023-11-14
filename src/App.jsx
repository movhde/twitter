import classes from './App.module.css'
import NavItems from './components/NavBar/NavItems/NavItems'
import TwitCart from './components/TwitCart/TwitCart'

function App() {

  return (
    <div className={classes.main}>
      <NavItems />
      <TwitCart />
    </div>
  )
}

export default App
