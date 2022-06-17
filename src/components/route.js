import { createBrowserHistory } from 'history';

const browserHistory = createBrowserHistory();

 const setRoute = (url, state) => {
    createBrowserHistory().push(url, state);
};

 const goBack = () => {
    createBrowserHistory().goBack();
};


export{
    setRoute,
    goBack,
    browserHistory
}
