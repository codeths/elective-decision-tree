const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html') {
    fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading index.html');
        return;
      }
      
      // live reload script
      const injectedContent = content.toString().replace(
        '</body>',
        `<script>
          // Simple polling for changes
          let lastModified = Date.now();
          setInterval(async () => {
            try {
              const response = await fetch('/check-update');
              const data = await response.json();
              if (data.modified > lastModified) {
                lastModified = data.modified;
                location.reload();
              }
            } catch (e) {}
          }, 1000);
        </script></body>`
      );
      
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(injectedContent);
    });
  }
  // Serves CSS files
  else if (req.url.endsWith('.css')) {
    const cssPath = path.join(__dirname, req.url);
    fs.readFile(cssPath, (err, content) => {
      if (err) {
        res.writeHead(404);
        res.end('CSS file not found');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.end(content);
    });
  }
  // Endpoint to check for file changes
  else if (req.url === '/check-update') {
    fs.stat(path.join(__dirname, 'index.html'), (err, stats) => {
      if (err) {
        res.writeHead(500);
        res.end('{}');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ modified: stats.mtimeMs }));
    });
  } 
  else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(PORT, () => {
  console.log(`Server with live reload running at http://localhost:${PORT}/`);
  console.log('Edit index.html and save to see changes instantly!');
});
