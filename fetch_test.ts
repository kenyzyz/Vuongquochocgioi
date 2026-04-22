const fetchCSV = async () => {
  const res = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTmWL2HwTFXQ6q0YhOkyifngirmE8v7BThNNCyeHfCFTHHGP6FiIaCID2f0SAR7B6vfepg1Htl40xJS/pub?gid=0&single=true&output=csv');
  console.log(res.headers.get('access-control-allow-origin'));
  const text = await res.text();
  console.log(text.substring(0, 100));
};
fetchCSV();
