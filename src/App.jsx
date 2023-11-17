import classes from './App.module.css'
import NavItems from './components/NavBar/NavItems/NavItems'
import Tweets from './components/Tweets/Tweets/Tweets'

function App() {

  return (
    <div className={classes.main}>
      <NavItems />
      <Tweets />
    </div>
  )
}

export default App
