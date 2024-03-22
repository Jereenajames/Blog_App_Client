import {BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import CreatePost from './components/CreatePost'
import NavComp from './components/NavComp'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Posts from './components/Posts'


function App() {
  

  return (
  <div>
    <Router>
      <NavComp/>
        <Routes>
                <Route path ="/" element = {<Posts />} />
                <Route path="/signin" element = {<Signin/>}/>
                <Route path="/signup" element = {<Signup/>}/>
                <Route path="/create" element = {<CreatePost/>}/>
        </Routes>
    </Router>
  </div> 

  )
}

export default App
