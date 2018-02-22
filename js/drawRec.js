
 
 function drawBackgroundRec(ctx, backgroundRecColor, recWidth, recHeight){
    ctx.fillStyle = backgroundRecColor;
    ctx.fillRect(0,0,recWidth,recHeight);
};

function drawPercentRec (ctx,percent, percentsDiv,percentRecColor,recHeight, fill){
    ctx.fillStyle = percentRecColor;
    const interval = 200/percent;
    let i = 0;
    let percentStep = percent/fill;
    let percentShow = 0;
    const draw = setInterval(function(){
    i++;
    ctx.clearRect(0, 0, 0, 0);
    ctx.fillRect(0,0,i,recHeight);
    percentShow += percentStep;
    percentsDiv.innerHTML=(Math.floor(percentShow)+" %");
        if (i===fill){
            percentsDiv.innerHTML=(percent+" %");
            clearInterval(draw);
        };
    },interval);
    
 }
    
function drawRec (canvasEl, percent, percentRecColor,backgroundRecColor,recWidth,recHeight){
const canvasElem =document.getElementById(canvasEl);
const ctx = canvasElem.getContext('2d');
const canvasContainer = canvasElem.parentElement;
const width = canvasContainer.offsetWidth;  
const fill = Math.floor(percent * width/100);
const tekst = percent + " %";
const percentsDiv = canvasContainer.nextElementSibling;

canvasElem.width=(width);
drawBackgroundRec(ctx, backgroundRecColor, recWidth, recHeight);
drawPercentRec(ctx,percent,percentsDiv, percentRecColor,recHeight, fill);
};

drawRec("html",90,"#074961","#9d9ab5",500,40);
drawRec("css",80,"#074961","#9d9ab5",500,40);
drawRec("js",80,"#074961","#9d9ab5",500,40);
drawRec("angular",80,"#074961","#9d9ab5",500,40);
drawRec("bootstrap",80,"#074961","#9d9ab5",500,40);
drawRec("git",80,"#074961","#9d9ab5",500,40);
drawRec("ps",80,"#074961","#9d9ab5",500,40);
drawRec("gimp",80,"#074961","#9d9ab5",500,40);

