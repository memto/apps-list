import { ReactElement, useState } from 'react'

import WalletsAppLayout from '../../layouts/WalletsAppLayout';

import Search from '../../components/walletsapp/search';
import UserDetails from '../../components/walletsapp/user-details';

import { searchUser } from '../../services/sample-account';

export default function UserSearch() {
  const [searchText, setSearchText] = useState("");
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const loadUser = async (userId) => {
    setLoading(true);
    searchUser(userId)
    .then(res => {
      setUser(res.data);
    })
    .catch(err => {
      setUser(undefined);
      setError(`Failed to search for user ID: ${userId}`)
    })
    .finally(() => {
      setLoading(false);
    });
  }

  const handleSubmit = () => {   
    setError(""); 
    loadUser(searchText);
  }

  return (
    <>
      <Search
        label="Users search"
        placeholder="Enter a user ID"
        searchText={searchText}
        onSearchTextChange={(text) => {
          setSearchText(text); 
          setUser(undefined);
          setError("");
        }}
        onSubmit={handleSubmit}
      />

      {user && <UserDetails user={user} />}
      {error && <div>{error}</div>}
    </>
  )
}

UserSearch.getLayout = (page: ReactElement) => {
  return (
    <WalletsAppLayout>
      {page}
    </WalletsAppLayout>
  )
}