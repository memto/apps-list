import axios from 'axios'
import Link from 'next/link';
import { useState, useEffect } from 'react'
import Search from './components/search';
import Sidebar from './components/sidebar';

import styles from './index.module.scss'

export default function UserSearch() {
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
            label = "Users search"
            placeholder = "Enter a user ID"
            searchText = {searchText}
            onSearchTextChange = {(text) => setSearchText(text)}
            onSubmit = {handleSubmit}
          />
        </div>          
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  return {
    props: {
      value: "getServerSideProps"
    }
  }
}