import React from 'react'
import TextInput from './shared/text-input'
import Select from './shared/select'

import LANGUAGES from '../constants/language.constants'

import searchStyles from './search.module.scss'

const Search = (props: any) => {
    const {searchText, language, onSearchTextChange, onLanguageChange} = props;

    const languages = [{value: '', label: 'all'}, ...LANGUAGES];

    return (
        <div className={searchStyles.search}>
            <TextInput
                className={searchStyles.searchInput}
                label="Search Repo" 
                value={searchText} 
                onChange={onSearchTextChange}
                placeholder="Some repo name"
            />
            <Select
                className={searchStyles.languageSelect}
                label="Language" 
                value={language} 
                onChange={onLanguageChange}    
                options={languages}
            />
        </div>
    )
}

export default Search
