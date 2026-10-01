const fs = require('fs');
const http = require('https');

http.get('https://sarkaricsc.com/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const titles = [...data.matchAll(/<a[^>]*>(.*?)<\/a>/gi)]
      .map(m => m[1].replace(/<[^>]+>/g, '').trim())
      .filter(t => t.length > 5 && !t.includes('img') && !t.includes('SARKARI CSC'));
    
    console.log(Array.from(new Set(titles)).slice(0, 50));
  });
});
