console.log("This Works!!")

const mapboxgl = require('mapbox-gl')

mapboxgl.accessToken = 'pk.eyJ1Ijoic2tvd2Fsc2tpMDgiLCJhIjoiY2s3dXJsYzBnMDMxeDNmcGg4M2FncWx0cSJ9.mfBmX0N_78-ogymd_bBxsg';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// mapboxgl.accessToken = 'pk.eyJ1Ijoic2tvd2Fsc2tpMDgiLCJhIjoiY2s3dXJsYzBnMDMxeDNmcGg4M2FncWx0cSJ9.mfBmX0N_78-ogymd_bBxsg';
// var map = new mapboxgl.Map({
// container: 'YOUR_CONTAINER_ELEMENT_ID',
// style: 'mapbox://styles/mapbox/streets-v11'
// });

