import axios from 'axios'
import { useState, useEffect } from 'react'

import styles from './index.module.scss'

export default function HomePage(props: any) {
  const [searchText, setSearchText] = useState(props.searchText);
  const [language, setLanguage] = useState('all');
  const [repos, setRepos] = useState(props.repos);
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

  const handleSearchTextChange = (text) => {
    console.log("handleSearchTextChange ->", text);
    setSearchText(text);

    if (text.length > 0)
      loadRepos(text, language);
  }

  const handleLanguageChange = (lang) => {
    console.log("handleLanguageChange ->", lang);
    setLanguage(lang)

    loadRepos(searchText, lang);
  }

  return (    
    <>
      <div className={styles.container}>
        <h1>Wallets app</h1>      
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