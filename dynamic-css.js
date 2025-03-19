function changeColor()
{
 var div=document.getElementById('dynamic-div');
 var currentcolor=div.style.backgroundcolor;
 var newcolor=getRandomColor();
 div.style.backgroundcolor=newcolor;
}
function getRandomColor()
{
 var letters='0123456789ABCDEF';
 var color='#';
 for(var i=0;i<6;i++)
{
 color+=letters[Math.floor(Math.random()*16)];
}
return color;
}
