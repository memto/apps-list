import React from 'react'
import { useState } from 'react'

import Sidebar from './components/sidebar'
import Search from './components/search'

const AccountSearch = () => {
    const [searchText, setSearchText] = useState("");
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false)
  
    const loadRepos = async (searchText, language) => {
      setLoading(true);
      const res = {data: null};
      
      if (res && res.data) {
        console.log("items ->", res.data.items);
        setRepos(res.data.items);
        setLoading(false);
      }
    }
    
    const handleSubmit = () => {
      console.log("handleSubmit ->", searchText);
    }

    return (
        <>
        <div className="main-content columns is-fullheight">  
          <div className="column is-2 is-narrow-mobile is-fullheight is-hidden-mobile">
            <Sidebar />
          </div>
          <div className="column is-10">
            <Search 
                label = "Accounts search"
                placeholder = "Enter an account ID"
                searchText = {searchText}
                onSearchTextChange = {(text) => setSearchText(text)}
                onSubmit = {handleSubmit}
            />
          </div>          
        </div>
      </>
    )
}

export default AccountSearch
