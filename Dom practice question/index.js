function background()
{


  /*  document.getElementById("div1").style.backgroundColor = "blue";
    document.getElementById("div1").style.color = "white";*/
    document.getElementById("div1").style.fontSize ="20px";
    document.getElementById("heading").style.color ="red";
    document.getElementById("div1").style.display ="none";
    
}

function work()
{
    document.getElementById("item").style.backgroundColor ="yellow";
    document.getElementById("img1").style.border ="8px solid red";
}

function toggle()
{
    s=document.getElementById("para1")

    if (s.style.color==="red")
        {
        s.style.color= "black";
        } 
    else {
        s.style.color ="red";
    }    
}

function center()
{
 f=document.getElementById("para2")

 if (f.style.textAlign==="center")
 {
    f.style.textAlign="left";
 }
 else{
    f.style.textAlign="center";
 }

 document.getElementById("btn4").style.boxShadow="4px 4px 4px gray";
}


function hello()
{
    s=document.getElementById("div2")

    if (s.style.backgroundColor==="green")
        {
        s.style.backgroundColor= "blue";
        } 
    else {
        s.style.backgroundColor ="green";
    }    
    document.getElementById("div2").style.color="white"
}


button=document.getElementById("btn6");
button.addEventListener
(
  'click',
  function()
  {
    paragraphs = document.querySelectorAll('p');

    paragraphs.forEach
    (
        
        function(p)
        {
          p.style.backgroundColor='red'
          p.style.fontSize='20px'     
             

        }
    );
  }
 );











