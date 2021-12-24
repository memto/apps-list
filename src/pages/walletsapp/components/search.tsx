import React from 'react'
import TextInput from '../../../components/shared/text-input'

import styles from './search.module.scss'

const Search = (props: any) => {
    const {label, placeholder, searchText, onSearchTextChange, submitText, onSubmit} = props;

    return (
        <div className={styles.search}>
            <label className='label'>{label}</label>

            <div className="field is-grouped">
            <p className="control">
                <input 
                    type="text"
                    placeholder={placeholder}
                    className={`input is-primary ${styles.searchInput}`} 
                    value={searchText}
                    onChange={e => onSearchTextChange(e.target.value)}
                />
            </p>
            <p className="control">
                <a 
                    className="button is-dark"
                    onClick={onSubmit}
                >
                    {submitText ? submitText : "Search"}
                </a>
            </p>
            </div>
        </div>
    )
}

export default Search
