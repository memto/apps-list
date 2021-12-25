import { ReactElement, useState } from 'react'

import WalletsAppLayout from '../../layouts/WalletsAppLayout';

import Search from '../../components/walletsapp/search';
import UserDetails from '../../components/walletsapp/user-details';

import { searchUser } from '../../services/sample-account';

export default function UserSearch() {
  const [searchText, setSearchText] = useState("");
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false)

  const loadUser = async (userId) => {
    setLoading(true);
    const res = await searchUser(userId);

    if (res) {
      setUser(res.data);
      setLoading(false);
    }
  }

  const handleSubmit = () => {
    loadUser(searchText);
  }

  return (
    <>
      <Search
        label="Users search"
        placeholder="Enter a user ID"
        searchText={searchText}
        onSearchTextChange={(text) => {
          setSearchText(text); setUser(undefined)
        }}
        onSubmit={handleSubmit}
      />

      {user && <UserDetails user={user} />}
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