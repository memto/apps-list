import React, { ReactElement } from 'react';

import getLayout from '../../../layouts/ReposAppLayout';

import { getRepo } from '../../../services/github';
import styles from './repo.module.scss';
import ButtonLink from '../../../components/shared/button-link';
import UserAvatar from '../../../components/user-avatar';
import ReposAppLayout from '../../../layouts/ReposAppLayout';

const Repo = ({ repo }) => {
    return (
        <div>
            <ButtonLink href="/reposapp" text="Back" />

            <div className={styles.header}>
                <span>{repo.name}</span>
            </div>
            <UserAvatar user={repo.owner}></UserAvatar>
            <div className={styles.description}>{repo.description}</div>
            <div className={styles.language}>{repo.language}</div>

            <ButtonLink
                href={repo.html_url}
                text="View on Github"
                type="dark"
                target="_blank"
                external
            />
        </div>
    );
};

export const getServerSideProps = async ({ query }) => {
    const res = await getRepo(query.id);
    return {
        props: { repo: res.data }
    };
};

Repo.getLayout = (page: ReactElement) => {
    return (
        <ReposAppLayout>
          {page}
        </ReposAppLayout>
    )
}

export default Repo;