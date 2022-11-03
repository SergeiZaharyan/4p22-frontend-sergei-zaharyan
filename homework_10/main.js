


 const fibonacci = (function start ()  {
      let count = -2;
      let a = 0;
      let b = 1;
      let c;
      return  () => {

        count++;
        
        if (count == -1) 
        {
          return 0;} else

        if (count == 0) 
        {
          return 1;} else

        if (count >= 1) 
        {
          c = a + b;
          a = b;
          b = c;};
          return c;
      };
   
  })();
  