import axios from 'axios'
import { useState, useEffect } from 'react'

import Image from 'next/image';

import RepoList from '../components/repo-list';
import Search from '../components/search';
import { searchRepos } from '../services/github';

import styles from './index.module.scss'

export default function HomePage(props: any) {
  const [searchText, setSearchText] = useState(props.searchText);
  const [language, setLanguage] = useState('all');
  const [repos, setRepos] = useState(props.repos);
  const [loading, setLoading] = useState(false)

  const loadRepos = async (searchText, language) => {
    setLoading(true);
    const res = await searchRepos(searchText, language);
    
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
        <img 
          className={styles.logo} 
          src='/img/study.svg' 
          alt='logo'
          // width={"500px"}
          // height={"100%"}
        />
        <Search 
          searchText={searchText} 
          language={language} 
          onSearchTextChange={handleSearchTextChange} 
          onLanguageChange={handleLanguageChange}
        />
        
        <RepoList repos={repos} loading={loading} />
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const resRandom = await axios.get('https://api.chucknorris.io/jokes/random');
  console.log("getServerSideProps => restRandom: ", resRandom.data.value.split(" ").pop());

  const someTextSearchs = ["react", "java", "restfull", "AI", "render", "game"]
  let searchText = "pizza";
  searchText = someTextSearchs[Math.floor(Math.random()*someTextSearchs.length)];
  
  console.log("getServerSideProps => searchText: ", searchText);
  const resRepos = await searchRepos(searchText);

  return {
    props: {
      searchText: searchText,
      repos: resRepos.data.items
    }
  };
}