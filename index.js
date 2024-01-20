const http = require('node:http');



// https module also extends the EventEmitter Class 
const server = http.createServer((req,res)=>{
	//res.end(req.url);
	// req.method = GET POST PUT DELETE
	const html = `<h1 style='color:#b91c1c;text-align:center;font-weight:100,font-family:sans-serif;'>About Page</h1>`

        if(req.url === '/'){
        res.writeHead(200,{'Content-Type':'text/plain'}).end('Home Page')	
        }
        else if(req.url === '/about'){
        res.writeHead(200,{'Content-Type':'text/html'}).end(html);
        }
        else if(req.url === '/api'){
        res.writeHead(200,{'Content-Type':'application/json'}).end(JSON.stringify({success:true,name:"Saqib"}))
        }
        else res.writeHead(404).end('Page Not Found');
	
});

server.listen(3000,()=>{
	console.log("Server running or Port:3000")
});