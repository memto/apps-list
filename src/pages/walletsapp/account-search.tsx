import React, { ReactElement } from 'react'
import { useState } from 'react'

import Search from '../../components/walletsapp/search'
import WalletsAppLayout from '../../layouts/WalletsAppLayout';

function AccountSearch() {
    const [searchText, setSearchText] = useState("");
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false)
    
    const handleSubmit = () => {
      console.log("handleSubmit ->", searchText);
    }

    return (       
        <Search 
            label = "Accounts search"
            placeholder = "Enter an account ID"
            searchText = {searchText}
            onSearchTextChange = {(text) => setSearchText(text)}
            onSubmit = {handleSubmit}
        />
    )
}

AccountSearch.getLayout = (page: ReactElement) => {
  return (
      <WalletsAppLayout>
        {page}
      </WalletsAppLayout>
  )
}

export default AccountSearch;
