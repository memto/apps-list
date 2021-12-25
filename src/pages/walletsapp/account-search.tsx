import React, { ReactElement } from 'react'
import { useState } from 'react'
import AccountDetails from '../../components/walletsapp/account-details';

import Search from '../../components/walletsapp/search'
import WalletsAppLayout from '../../layouts/WalletsAppLayout';
import { searchAccount } from '../../services/sample-account';

function AccountSearch() {
  const [searchText, setSearchText] = useState("");
  const [account, setAccount] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadAccount = async (accId) => {
    setLoading(true);
    searchAccount(accId)
    .then(res => {
      setAccount(res.data);
    })
    .catch(err => {
      setAccount(undefined);
      setError(`Failed to search for account ID: ${accId}`)
    })
    .finally(() => {
      setLoading(false);
    });
  }

  const handleSubmit = () => {
    setError("");
    loadAccount(searchText);
  }

  return (
    <>
      <Search
        label="Accounts search"
        placeholder="Enter an account ID"
        searchText={searchText}
        onSearchTextChange={(text) => {
          setSearchText(text); 
          setAccount(undefined);
          setError("");
        }}
        onSubmit={handleSubmit}
      />

      {account && <AccountDetails account={account} />}
      {error && <div>{error}</div>}
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
