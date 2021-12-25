import React from 'react'

import ButtonLink from '../shared/button-link';

import styles from './user-details.module.scss'

const UserDetails = ({ user }) => {
  // console.log("UserDetails =>", user);
  
  return (
    <div className={styles.userDetails}>
      <label className='label'>User details</label>
      <div>ID: {user.attributes.id}</div>
      <div>Name: {user.attributes.name}</div>

      <ButtonLink
        href={`/walletsapp/user-accounts/${user.attributes.id}`}
        text="Go to user accounts page"
        type="dark"
        target=""
        external={false}
      />
    </div>
  )
}

export default UserDetails
