<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
  <style>
  
  </style>
</head>
<body>

<h2>JavaScript Operators</h2>

<p>x = 5, y = 2, calculate z = x + y, and display z:</p>

<p id="demo"></p>
<img src="https://ib.3lift.com/static/buttons/edaa/OBA_UK.png">
<script>

/* code for detect mouse hold to generate event like on drage start  */
/* when make hold time wait smoth it will give advanced mouse user abilty to redit  fast hold-relase mouse action else */
const holdWait = 600;
let mouseDown = 0;
let mouseDragEvent = false;
let isMouseDown = false;
let mouseDownTimeouts = [];

function clearTimeouts(timeOutsList){
  timeOutsList.forEach( (timeout)=>{
    if (timeout){
      clearTimeout(timeout);
    }
  });
  return [];
}
function mouseDownChecker(){
  /* if user hold mouse for 500 mileseconds triger this event*/
  let oneI = Math.floor(holdWait/3);
  mouseDownTimeouts = clearTimeouts(mouseDownTimeouts);
  let timeoutI = 0;
  for (let i=0; i<3; i++){
    let mDownTimeout = setTimeout( ()=>{
    console.log(isMouseDown);
      if (i==2 && isMouseDown == true){
        mouseDragEvent = true;
        console.log('mouse hold event', timeoutI);
        /* here start check for mouse hold relase event lets say parent and child events */
                  mouseDownTimeouts = clearTimeouts(mouseDownTimeouts);
      }
    }, timeoutI);
    timeoutI += oneI;
    mouseDownTimeouts.push(mDownTimeout);
  }
  
}



function mouseDragStartGenerator(elmSelector){
  

  $(elmSelector).on('mousedown mouseup', function mouseState(e) {
      
      
      if (e.type == "mouseout" && (isMouseDown == false || mouseDragEvent== false)){
        /* we only need mouseout when inside the draging area if user leave this area drop the item like mouseup this also alow for move event outside the element*/
        return false;
      }
      if (e.type == "mousedown") {
          //code triggers on mouse hold
          isMouseDown = true;
          mouseDownChecker();


      } else {
      isMouseDown = false;
      if (mouseDragEvent == true){
        console.log('on mouse drag relase event');
        mouseDragEvent = false;
      }
      /*
      if (mouseDragEvent == true){

      console.log("ok mouse hold relase event", e.type);
          isMouseDown = false;
          mouseDragEvent = false;
      }  */   
      }

  });
}
mouseDragStartGenerator('img');
</script>

</body>
</html>
