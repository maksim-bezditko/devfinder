import { Header } from "./components/Header";
import { Container } from "./components/Container";
import { Search } from "./components/Search";
import { UserCard } from './components/UserCard/UserCard';
import { GithubError, LocalGithubUser } from './types/userTypes';
import { useEffect, useState } from "react";
import { isGithubUser } from "utils/typeguards";
import { extractLocalUser } from "utils/extract-local-user";


function App() {
  const [user, setUser] = useState<LocalGithubUser | null>(null);

  const fetchUsers = async (text: string) => {
    const response = await fetch(`https://api.github.com/users/${text}`);

    if (response.ok) {
      const user =  await response.json() as GithubError | GithubError;
      if (isGithubUser(user)) {
        setUser(extractLocalUser(user))
        localStorage.setItem("current", text)
      } else {
        setUser(null);
      }
    }
  }

  useEffect(() => {
    fetchUsers(localStorage.getItem("current") || "maksim-bezditko")
  }, [])
  
  return (
    <div className="app">
      <Container>
        <Header/>
        <Search error={!user} onSearch={fetchUsers}/>
        {user && <UserCard
          {...user}
        />}
      </Container> 
    </div> 
  );
}

export default App;
