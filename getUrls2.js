const fs = require('fs');
const https = require('https');
const path = require('path');

async function getCommonsImageUrl(filename) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&titles=File:${filename}&prop=imageinfo&iiprop=url&iiurlwidth=800&format=json`;
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
          if (pageId !== '-1' && pages[pageId].imageinfo && pages[pageId].imageinfo[0].thumburl) {
            resolve(pages[pageId].imageinfo[0].thumburl);
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
  const badami = await getCommonsImageUrl('Badami_Indian_Mango_variety_IMG_20230603_(1).jpg');
  const neelum = await getCommonsImageUrl('Mango_NeelumAsit_ftg.jpg');
  const malgova = await getCommonsImageUrl('Malgova.jpeg');
  
  console.log('Badami URL:', badami);
  console.log('Neelum URL:', neelum);
  console.log('Malgova URL:', malgova);
}

main();
