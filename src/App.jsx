import classes from './App.module.css'
import NavItems from './components/NavBar/NavItems/NavItems'
import SideBar from './components/SideBar/SideBar/SideBar'
import Tweets from './components/Tweets/Tweets/Tweets'

function App() {

  return (
    <div className={classes.main}>
      <NavItems />
      <Tweets />
      <SideBar />
    </div>
  )
}

export default App
