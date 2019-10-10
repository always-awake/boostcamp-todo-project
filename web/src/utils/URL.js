// domain
const DOMAIN = 'http://localhost:3000';

// api server url
const LOGIN_URL = `${DOMAIN}/users/login`;
const PROJECT_LIST_URL = `${DOMAIN}/projects`;
const PROJECT_URL = (projectPk) => {
  return `${DOMAIN}/projects/${projectPk}`
};

export {
  LOGIN_URL,
  PROJECT_LIST_URL,
  PROJECT_URL
}