import React, {useState, useEffect} from 'react';
import Navbar from "./components/Navbar.jsx";
import UserCard from "./components/UserCard.jsx";
import SearchBar from "./components/SearchBar.jsx";
import './App.css';

function App() {
  const [userName, setUserName] = useState('');
  const [repos, setRepos] = useState(0);
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [avatar, setAvatar] = useState('');
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState(null);
  
  useEffect(()=>{
    fetch('https://api.github.com/users/example')
    .then(res => res.json())
    .then(data => (setData(data)));
  }, []);

  const setData = ({
    login, 
    followers, 
    following, 
    public_repos, 
    avatar_url 
    }) => {
    setUserName(login);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos); 
    setAvatar(avatar_url);
  }

  const handleSearch = (e) => {
    setUserInput(e.target.value)
  }

  const handleSubmit = () => {
    fetch(`https://api.github.com/users/${userInput}`)
      .then(res => res.json())
    .then(data => {
      if (data.message) {
        setError(data.message)
      }
      else {
      setData(data)
      setError(null);
    }});
  }

  return (
    <div className="App">
      <Navbar/>
      <SearchBar
        handleSearch={handleSearch}
        handleSubmit={handleSubmit}
      />
      {error ? (<h1>{error}</h1>) :
      <UserCard 
        avatar={avatar}
        userName={userName}
        repos={repos}
        followers={followers} 
        following={following}
        error={error}
      />}
    </div>
  );
}

export default App;
