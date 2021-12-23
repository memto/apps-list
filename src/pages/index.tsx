import axios from 'axios'
import { useState, useEffect } from 'react'
import Search from '../components/search';
import { searchRepos } from './api/github';

export default function HomePage(props: any) {
  const [searchText, setSearchText] = useState('');
  const [language, setLanguage] = useState('all');
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   if (searchText.length > 0) {
  //     setLoading(true);
  //     searchRepos(searchText, language)
  //     .then(res => {
  //       console.log("items -> ", res.data.items)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  //   }
  // }, [searchText, language])

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
      <Search 
        searchText={searchText} 
        language={language} 
        onSearchTextChange={handleSearchTextChange} 
        onLanguageChange={handleLanguageChange}
      />
      
      {loading && <h1>Loading</h1>}

      {JSON.stringify(repos)}
    </>
  )
}

export const getServerSideProps = async () => {
  console.log("getServerSideProps")

  const res = await axios.get('https://api.chucknorris.io/jokes/random')

  return {
    props: {
      value: res.data.value
    }
  }
}