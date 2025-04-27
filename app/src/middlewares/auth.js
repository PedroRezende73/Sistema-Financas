const isAuthenticated = (req, res, next) => {
  if (req.session.user) {
    return next();
  }
  res.redirect('/financas/login');
};

module.exports = {
  isAuthenticated
}; 