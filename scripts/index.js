const agrMovie = require("./agrMovie")
const generateHtml = require('./generHTML');
// JQuery
// $.get("https://students-api.up.railway.app/movies", (data, status) => {
//   if (status === `success`) {
//     if (Array.isArray(data)) {  
//       document.getElementById('Load').remove();
//       tempData = data;
//       generateHtml(data);
//     }
//   }else{
//     document.getElementsByClassName('load-gener-title')[0].innerText = "Error con el servido";
//   }
// });
//
//

if(window.location.pathname.includes("agrMovie.html")){ 
  agrMovie()
}else{
  const axios = require('axios');
  let tempData = [];
  const fetchData = async ()=>{
    let tempData = [];
    try{  
      tempData =  await axios.get("http://localhost:3000/movies");
      document.getElementById('Load').remove();
      generateHtml(tempData.data);
  
    }catch(err){
      document.getElementsByClassName('load-gener-title')[0].innerText = "Error con el servido";
      console.log(err.message);
    }
  };
  fetchData();
}






