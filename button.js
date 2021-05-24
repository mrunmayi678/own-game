class Button {

    constructor(){

         

        this.button1 = createButton('Click      here     to    continue');
        this.button1.position(500,500);
        this.button1.style('background', 'pink');    

        this.button2 = createButton('Click      here   to   continue');
        this.button2.position(500,500);
        this.button2.style('background', 'pink');    
        this.button2.hide();
     
        
        this.button3 = createButton('Click      here   to  continue');
        this.button3.position(500,500);
        this.button3.style('background', 'pink');    
        this.button3.hide();

          
        this.button4 = createButton('Click      here   to  continue');
        this.button4.position(700,700);
        this.button4.style('background', 'pink');    
        this.button4.hide();
     
  
        

        

       
//add code for creating and positioning the third input box and button
        
    }

    display(){

        this.button1.mousePressed (() => {
           if(gameState=== "begin"){
               this.button1.hide();
               this.button2.show();
               gameState="2";
           }
        });
       console.log(gameState)
       this.button2.mousePressed(() =>{
           if(gameState==="2"){
               this.button2.hide();
               this.button3.show();
               gameState="3";

           }
       })
       this.button3.mousePressed(() =>{
        if(gameState==="3"){
            this.button3.hide();
            this.button4.show();
            gameState="4";
           
        }
    })
    this.button4.mousePressed(() =>{
        if(gameState==="4"){
            this.button3.hide();
            gameState="maharashtra";
           
        }
    })
        
       

      


        

    }
}