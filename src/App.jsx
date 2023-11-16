import classes from './App.module.css'
import NavItems from './components/NavBar/NavItems/NavItems'
import TwitPost from './components/Twits/TwitPost/TwitPost'

function App() {

  return (
    <div className={classes.main}>
      <NavItems />
      <TwitPost />
    </div>
  )
}

export default App
