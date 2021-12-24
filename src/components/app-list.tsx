import React from 'react';
import Image from 'next/image';

import AppListItem from './app-list-item';

import styles from "./app-list.module.scss";

const AppList = ({ apps, loading }) => {
  if (loading) {
    return <img 
      className={styles.loader}
      src="/img/loader.gif"
      alt='logo'
    />
  }

  if (!apps || apps.length === 0) {
    return <span className={styles.message}>No apps found.</span>;
  }

  return (
    <div className={styles.appList}>
      {apps.map((app) => (
        <AppListItem key={app.id} app={app}></AppListItem>
      ))}
    </div>
  );
};

export default AppList;