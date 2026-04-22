import https from 'https';
https.get('https://docs.google.com/spreadsheets/d/e/2PACX-1vTmWL2HwTFXQ6q0YhOkyifngirmE8v7BThNNCyeHfCFTHHGP6FiIaCID2f0SAR7B6vfepg1Htl40xJS/pub?gid=0&single=true&output=csv', res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log(data));
});
