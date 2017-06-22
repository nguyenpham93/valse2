const express = require('express');
const app = express();
const nunjucks = require('nunjucks');

app.use('/public', express.static(__dirname + '/public'));
nunjucks.configure('views', {
    autoescape: true,
    express: app,
    watch: true
});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.get('/',(req,res)=>{	
	res.render('index');
});	

app.listen('8000', () => {
	console.log('App listen port 8000');
});