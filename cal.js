
   let displyonscreen= document.getElementById("screen");
   function display(num){
     displyonscreen.value += num;
   }
   function calculate(){
     try{
         displyonscreen.value=eval(displyonscreen.value);
     }
     catch(err){
         alert("invalid/two symbol are togther");

     }
 
   }

   
   function del(){
     displyonscreen.value = displyonscreen.value.slice(0,-1);

   }
   function Clear(){
     displyonscreen.value="";
   }

   function sqr(){
   
    displyonscreen.value= Math.pow(displyonscreen.value,2);
   
  }
    function sqrt(){
      displyonscreen.value=Math.sqrt(displyonscreen.value);
    }


   function Bin(){

    displyonscreen.value= binary(displyonscreen.value);
     function binary(dec){
      if(dec<0){
       alert("it cant change");
      }
      
      else {
     return (dec >>> 0).toString(2);}

   }
  }
  function fac(){
    displyonscreen.value= factorial(displyonscreen.value);

    //base case
   function factorial(n)
    {
    if(n == 0 || n== 1){
        return 1;
    //recursive case
    }else{
        return n* factorial(n-1);
    }
}
  }