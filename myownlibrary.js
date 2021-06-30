function istouching(){
    if(movingrect.x-fixrect.x<=fixrect.width/2+movingrect.width/2 && fixrect.x-movingrect.x<=fixrect.width/2+movingrect.width/2){
    movingrect.shapeColor="red";
    fixrect.shapeColor="red";
    }
    else{
      movingrect.shapeColor="green";
      fixrect.shapeColor="green";
    
      
    }
    if(movingrect.y-fixrect.y<=fixrect.height/2+movingrect.height/2 && fixrect.y-movingrect.y<=fixrect.height/2+movingrect.height/2){
      movingrect.shapeColor="red";
      fixrect.shapeColor="red";
    }
    else{
      movingrect.shapeColor="green";
      fixrect.shapeColor="green";
    }
    
    
    
    
    
    }