import axios from "axios";

import { axiosGetCancellable } from "../../helpers/axios.helper";

const axiosConfig = {
    baseURL: 'https://api.github.com',
    auth: {
        username: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
        password: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET
    }
};

function searchRepos(searchText, lang) {
    const query = lang ? `${searchText}+language:${lang}` : searchText;
    // return axios.get(
    //     `/search/repositories?q=${query}&sort=stars&order=desc`,
    //     axiosConfig
    // );
    
    return axiosGetCancellable(
        `/search/repositories?q=${query}&sort=stars&order=desc`,
        axiosConfig
    );
}

export { searchRepos };
