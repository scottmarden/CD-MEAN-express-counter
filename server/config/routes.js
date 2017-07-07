module.exports = app => {

	app.get('/', (req, res) => {
		if (!req.session.hasOwnProperty("count")){
			req.session.count = 0;
		}
		req.session.count++;
		res.render("index", {count: req.session.count});
	})

	app.get('/double', (req, res) => {
		req.session.count ++;
		res.redirect('/');
	})

	app.get('/reset', (req, res) => {
		req.session.destroy();
		res.redirect('/');
	})
}
