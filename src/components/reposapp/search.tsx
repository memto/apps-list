import React from 'react'
import TextInput from '../shared/text-input'
import Select from '../shared/select'

import LANGUAGES from '../../constants/language.constants'

import styles from './search.module.scss'

const Search = (props: any) => {
    const {searchText, language, onSearchTextChange, onLanguageChange} = props;

    const languages = [{value: '', label: 'all'}, ...LANGUAGES];

    return (
        <div className={styles.search}>
            <TextInput
                className={styles.searchInput}
                label="Search Repo" 
                value={searchText} 
                onChange={onSearchTextChange}
                placeholder="Some repo name"
            />
            <Select
                className={styles.languageSelect}
                label="Language" 
                value={language} 
                onChange={onLanguageChange}    
                options={languages}
            />
        </div>
    )
}

export default Search
