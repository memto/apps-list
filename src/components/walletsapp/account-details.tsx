import React from 'react'

import ButtonLink from '../shared/button-link';

import styles from './account-details.module.scss'

const AccountDetails = ({ account }) => {
  // console.log("AccountDetails =>", account);

  return (
    <div className={styles.accountDetails}>
      <label className='label'>Account details</label>
      <div>ID: {account.attributes.id}</div>
      <div>Name: {account.attributes.name}</div>
      <div>Balance: {account.attributes.balance}</div>
      <div>User ID: {account.attributes.user_id}</div>

      <ButtonLink
        href={`/walletsapp/user-accounts/${account.attributes.user_id}`}
        text="Go to user accounts page"
        type="dark"
        target=""
        external={false}
      />
    </div>
  )
}

export default AccountDetails
