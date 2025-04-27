class DashboardController {
  static async index(req, res) {
    try {
      res.render('dashboard/index', {
        user: req.session.user
      });
    } catch (error) {
      console.error(error);
      res.status(500).render('error', { 
        message: 'Erro ao carregar o dashboard'
      });
    }
  }
}

module.exports = DashboardController; 