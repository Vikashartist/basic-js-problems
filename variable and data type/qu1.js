   const inp1 = document.getElementById("inp1");
   const inp2 = document.getElementById("inp2");
   const btn = document.getElementById("btn");
   const para1 = document.getElementById("para1");
   const para2 = document.getElementById("para2");
   btn.addEventListener("click", function() {

     var store1 = parseInt(inp1.value);
     var store2 = parseInt(inp2.value);
     var store3 = store1;
     var store1 = store2;
     var store2 = store3;

     para1.innerHTML = store1;
     para2.innerHTML = store2;

   });