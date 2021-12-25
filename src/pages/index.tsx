import getLayout from '../layouts/AppsListLayout'

import AppList from '../components/app-list';
import styles from './index.module.scss'
import { ReactElement } from 'react';
import AppsListLayout from '../layouts/AppsListLayout';

const apps = [
  {
    id: 0,
    name: "Wallets management",
    app_url: "/walletsapp/user-search",
    owner: {
      avatar_url: 'https://avatars.githubusercontent.com/u/9892522?v=4',
      login: "freeCodeCamp"
    },
    description: "REST API plugin for Unreal Engine 4 - we love restfull backend and JSON communications!"
  },
  {
    id: 1,
    name: "Repos list",
    app_url: "/reposapp",
    owner: {
      avatar_url: 'https://avatars.githubusercontent.com/u/5248574?v=4',
      login: "phly"
    },
    description: "REST API plugin for Unreal Engine 4 - we love restfull backend and JSON communications!"
  }
];

export default function AppsList(props: any) {
  return (
    <>
      <div className={styles.container}>
        <img
          className={styles.logo}
          src='/img/undraw_nuxt_js.svg'
          alt='logo'
        />

        <AppList apps={apps} loading={false} />
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  return {
    props: {
      value: "getServerSideProps"
    }
  }
}

AppsList.getLayout = (page: ReactElement) => {
  return (
    <AppsListLayout>
      {page}
    </AppsListLayout>
  )
}