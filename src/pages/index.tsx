import axios from 'axios'
import { useState, useEffect } from 'react'
import RepoList from '../components/repo-list';
import Search from '../components/search';
import { searchRepos } from '../services/github';

export default function HomePage(props: any) {
  const [searchText, setSearchText] = useState(props.searchText);
  const [language, setLanguage] = useState('all');
  const [repos, setRepos] = useState(props.repos);
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
      
      <RepoList repos={repos} loading={loading} />
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