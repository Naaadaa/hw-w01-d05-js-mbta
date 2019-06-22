
const subwayLines = {
    Red : ["south station ", "park street ", "kendall ", "central ", "harvard ", "poter ", "Davis ", "alewife "],
    Green : ["goverment center", "park street", "bolyston ", "arlington ", "copley ", "hynes", "kenmore"],
    
    Orange : ["north station", "haymarket","park street", "state","downtown crossing ","chainatown","back bay ","forest hills" ] , 
    
  
   stopsBetweenStations :  function (startline , startstation , endline , endstation ) {
     
    let start = Math.abs(this[startline].indexOf(startstation));
    
    let end = Math.abs(this[endline].indexOf(endstation));
    let stopPoints = 0;
  
  
  
  if (start== 1 && end == 1 ){
  
         if(end > start ){
            stopPoints= end- start ;
  
     }else if (start >end){
         stopPoints=start- end;
  
     } else {
         stopPoints =0;
     }
  // it should return the stop points . 
  
  
    // execute the intersection in park street
  
  }//end of if #1 
  
  console.log ("start station is "+startline+"  start line from "+startstation); 
  console.log ("end station is "+endline+" end line from "+endstation);  
  console.log ("The stops between two Disnation is : " +stopPoints ); } 
  
  
    }
  
  