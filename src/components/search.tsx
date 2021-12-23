import React from 'react'
import TextInput from './shared/text-input'
import Select from './shared/select'

import LANGUAGES from '../constants/language.constants'

const Search = (props: any) => {
    const {searchText, language, onSearchTextChange, onLanguageChange} = props;

    const languages = [{value: '', label: 'all'}, ...LANGUAGES];

    return (
        <div>
            <TextInput 
                label="Search Repo" 
                value={searchText} 
                onChange={onSearchTextChange}
                placeholder="Some repo name"
            />
            <Select 
                label="Language" 
                value={language} 
                onChange={onLanguageChange}    
                options={languages}
            />
        </div>
    )
}

export default Search
