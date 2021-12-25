import React, { ReactElement } from 'react'
import WalletsAppLayout from '../../../layouts/WalletsAppLayout'

import { getUserAccounts } from '../../../services/sample-account'

const Account = () => {
    return (
        <div>
            User accounts page
        </div>
    )
}

export const getServerSideProps = async ({ query }) => {
    console.log("Account/getServerSideProps: ", query.id)
    const res = await getUserAccounts(query.id);

    return {
        props: { profile: res.data }
    }
}

Account.getLayout = (page: ReactElement) => {
    return (
        <WalletsAppLayout>
            {page}
        </WalletsAppLayout>
    )
}

export default Account
