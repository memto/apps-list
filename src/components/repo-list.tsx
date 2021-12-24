import React from 'react';
import Image from 'next/image';

import RepoListItem from './repo-list-item';

import styles from "./repo-list.module.scss";

const RepoList = ({ repos, loading }) => {
  if (loading) {
    return <Image 
      className={styles.loader}
      src="/img/loader.gif"
      alt='logo'
    />
  }

  if (!repos || repos.length === 0) {
    return <span className={styles.message}>No repositories found.</span>;
  }

  return (
    <div className={styles.repoList}>
      {repos.map((repo) => (
        <RepoListItem key={repo.id} repo={repo}></RepoListItem>
      ))}
    </div>
  );
};

export default RepoList;