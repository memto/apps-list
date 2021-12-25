import React from 'react'

import ButtonLink from '../shared/button-link';

import styles from './user-details.module.scss'

const UserDetails = ({user}) => {
    // console.log("UserDetails =>", user);

    const account_ids = user.attributes.account_ids.join(",");

    return (
        <div className={styles.userDetails}>
            <label className='label'>User details</label>
            <div>ID: {user.attributes.id}</div>
            <div>Name: {user.attributes.name}</div>
            
            <ButtonLink
                href={`/walletsapp/user-details/${user.attributes.id}?account_ids=${account_ids}`}
                text="Go to user accounts page"
                type="dark"
                target=""
                external={false}
            />
        </div>
    )
}

export default UserDetails
