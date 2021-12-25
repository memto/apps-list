import React, { ReactElement } from 'react'
import ButtonLink from '../../../components/shared/button-link';
import WalletsAppLayout from '../../../layouts/WalletsAppLayout'

import { searchAccount, searchUser } from '../../../services/sample-account'

const UserDetails = (props: any) => {
  // console.log("UserDetails:", props);

  if (props.error) {
    console.error(props.message)
    return (
      <div>
        {props.message}
      </div>
    )
  } else {
    return (
      <div>
        <ButtonLink
        href={`/walletsapp/user-search`}
        text="Back"
        type="dark"
        target=""
        external={false}
        />

        <label className="label">
          {`Hey: ${props.user.attributes.name}. This is all of your accounts`}
        </label>

        <table className="table is-responsive">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {props.userAccounts.map((acc, idx) => 
              <tr key={idx}>
                <td>{acc.attributes.id}</td>
                <td>{acc.attributes.name}</td>
                <td>{acc.attributes.balance}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

export const getServerSideProps = async ({ query }) => {
  try {
    const resUser = await searchUser(query.id);
    if (resUser) {
      const account_ids = resUser.data.attributes.account_ids;
  
      const resAccounts = await Promise.all(account_ids.map(acc_id => 
        searchAccount(acc_id)
        .catch(err => {
          return undefined
        })
      ));
      const userAccounts = resAccounts.reduce((accs, resAcc) => {
        if (resAcc && resAcc.data) {
          return [...accs, resAcc.data];
        } else {
          return accs;
        }
      }, []);      
      // console.log("UserDetails/getServerSideProps:", userAccounts);

      return {
        props: { 
          error: false,
          user: resUser.data,
          userAccounts: userAccounts
        }
      }
    } else {
      return {
        props: {
          error: true,
          message: "Get user failed"  
        }
      };
    }
  } catch (err) {
    // console.log("UserDetails/getServerSideProps:", err);
    
    return {
      props: { 
        error: true,
        message: "Get user and/or user accounts failed"
      }
    }
  }

  
}

UserDetails.getLayout = (page: ReactElement) => {
  return (
    <WalletsAppLayout>
      {page}
    </WalletsAppLayout>
  )
}

export default UserDetails
