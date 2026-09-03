const fs = require('fs');
const https = require('https');
const path = require('path');

async function getWikiImageUrl(title) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${title}&prop=pageimages&format=json&pithumbsize=800`;
  const options = { headers: { 'User-Agent': 'AnanthFarm/1.0' } };
  
  return new Promise((resolve, reject) => {
    https.get(url, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query.pages;
          const pageId = Object.keys(pages)[0];
          if (pageId !== '-1' && pages[pageId].thumbnail) {
            resolve(pages[pageId].thumbnail.source);
          } else {
            resolve(null);
          }
        } catch (e) {
          resolve(null);
        }
      });
    }).on('error', () => resolve(null));
  });
}

async function main() {
  const banganapalli = await getWikiImageUrl('Banganapalle_(mango)');
  const neelum = await getWikiImageUrl('Neelum_(mango)'); // I know Neelum failed before, but let's try
  
  console.log('Banganapalli URL:', banganapalli);
  console.log('Neelum URL:', neelum);
}

main();
