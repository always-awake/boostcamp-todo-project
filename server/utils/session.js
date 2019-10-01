const makeUserSessionData = (user) => {
  return {
    pk: user['pk'],
    id: user['id'],
    name: user['name'],
    is_superuser: user['is_superuser'],
  }
};

module.exports = {
  makeUserSessionData
};