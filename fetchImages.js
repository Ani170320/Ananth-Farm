const fs = require('fs');
const https = require('https');
const path = require('path');

async function fetchWikiImage(title, filename) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${title}&prop=pageimages&format=json&pithumbsize=800`;
  
  const options = {
    headers: { 'User-Agent': 'AnanthFarmScript/1.0 (test@example.com)' }
  };
  
  return new Promise((resolve, reject) => {
    https.get(url, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query.pages;
          const pageId = Object.keys(pages)[0];
          
          if (pageId === '-1' || !pages[pageId].thumbnail) {
            console.log(`No image found for ${title}`);
            resolve(false);
            return;
          }
          
          const imageUrl = pages[pageId].thumbnail.source;
          console.log(`Found image for ${title}: ${imageUrl}`);
          
          const dest = path.join(__dirname, 'public', filename);
          const file = fs.createWriteStream(dest);
          
          https.get(imageUrl, options, (response) => {
            response.pipe(file);
            file.on('finish', () => {
              file.close();
              console.log(`Downloaded ${filename}`);
              resolve(true);
            });
          }).on('error', err => {
            fs.unlink(dest, () => {});
            reject(err);
          });
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function main() {
  await fetchWikiImage('Gir_Kesar', 'mango-kesar.jpg');
  await fetchWikiImage('Totapuri', 'mango-totapuri.jpg');
  await fetchWikiImage('Neelum_(mango)', 'mango-neelum.jpg');
  // There isn't a widely known "Kalmi" distinct wiki page with an image, Malgova might have one
  await fetchWikiImage('Malgova', 'mango-kalmi.jpg');
}

main().catch(console.error);
