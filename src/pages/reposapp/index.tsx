import axios from 'axios'
import { ReactElement, useState } from 'react'

import RepoList from '../../components/reposapp/repo-list';
import Search from '../../components/reposapp/search'
import ReposAppLayout from '../../layouts/ReposAppLayout';
import { searchRepos } from '../../services/github';

import styles from './index.module.scss'

export default function ReposApp(props: any) {
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

ReposApp.getLayout = (page: ReactElement) => {
  return (
      <ReposAppLayout>
        {page}
      </ReposAppLayout>
  )
}