
   const inp = document.getElementById("num1");
   const btn = document.getElementById("btn");
   const pare = document.getElementById("pare");
   
   btn.addEventListener("click",function(){
     var store = parseInt(inp.value);
     if(store==0){
       para.innerHTML="Not even Not odd."
       
     }else if((store%2)==0){
       para.innerHTML="Even";
        
     }else{
       para.innerHTML="Odd";
      
     }
     
   });
