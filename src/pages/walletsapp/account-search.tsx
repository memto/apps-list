import React, { ReactElement } from 'react'
import { useState } from 'react'
import AccountDetails from '../../components/walletsapp/account-details';

import Search from '../../components/walletsapp/search'
import WalletsAppLayout from '../../layouts/WalletsAppLayout';
import { searchAccount } from '../../services/sample-account';

function AccountSearch() {
    const [searchText, setSearchText] = useState("");
    const [account, setAccount] = useState();
    const [loading, setLoading] = useState(false)
    
    const loadAccount = async (accId) => {
      setLoading(true);
      const res = await searchAccount(accId);

      if (res) {
        setAccount(res.data);
        setLoading(false);
      }
    }

    const handleSubmit = () => {
      loadAccount(searchText);
    }

    return (
      <>
        <Search 
            label = "Accounts search"
            placeholder = "Enter an account ID"
            searchText = {searchText}
            onSearchTextChange = {(text) => {
              setSearchText(text); setAccount(undefined)
            }}
            onSubmit = {handleSubmit}
        />

        {account && <AccountDetails account={account} />}
      </>
    )
}

AccountSearch.getLayout = (page: ReactElement) => {
  return (
      <WalletsAppLayout>
        {page}
      </WalletsAppLayout>
  )
}

export default AccountSearch;
