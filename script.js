let inputData="";
let buttons = document.querySelectorAll("body > div > div button");
for(var i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener('click', function(res){
         

        if(res.target.innerText==='=')
        {
            document.querySelector("input").value=eval(inputData);
            inputData="";
        }
        else if(res.target.innerText==="Ac")
        {
            inputData="";
            document.querySelector("input").value = inputData;
        }
        else{
            let i = res.target.innerText;  
            console.log(i);
            inputData=inputData+i;
            document.querySelector("input").value=inputData;
        }
         
         
          
    })
}
