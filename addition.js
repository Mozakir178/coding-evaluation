var squ ={
    side : 8 , 
    area : function(){
      var area = this.side**2 ;
      return area;
    } ,
    perimeter :  function(){
      var per = 4*this.side;
      return per
    } 
    
    } ;
    
    console.log(squ); 
    console.log(squ.side);
    console.log(squ.area());
    console.log(squ.perimeter());