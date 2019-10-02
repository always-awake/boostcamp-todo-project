const { msgSerializer } = require('../utils/serializers');

const isAuthenticated = (req, res, next) => {
  if(req.isAuthenticated()) {
    return next();
  } else {
    res.status(401);
    res.json(msgSerializer('요청하신 페이지를 조회할 권한이 없습니다.'));
  }
};

module.exports = {
  isAuthenticated
};