import React from 'react';
import Link from 'next/link';

import UserAvatar from './user-avatar';
import styles from './app-list-item.module.scss'
import ButtonLink from './shared/button-link';

const AppListItem = ({ app }) => {
  const cutDescription = (description) => {
    if (description && description.length > 100) {
      return description.slice(0, 100) + '...';
    }

    return description;
  };

  return (
    <div className={`${styles.appListItem} box`}>
      <div className={styles.appName}>
        <Link href="/app_url" as={app.app_url}>
          <a>{app.name}</a>
        </Link>
      </div>

      <UserAvatar user={app.owner} />

      <p className={styles.description}>{cutDescription(app.description)}</p>

      <div className={styles.footer}>
        <ButtonLink
          href={app.app_url}
          text="Go to app"
          type="dark"
          target=""
          external={false}
        />
      </div>
    </div>
  );
};

export default AppListItem;