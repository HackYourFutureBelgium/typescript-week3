

class Game {

    flag : number=0
     check:boolean=false;
    counter : number=1
    numbers:string[]=["1","2","3","4","5","6","7","8","9"];
    multi:string[][] = [["?","?","?"],["?","?","?"],["?","?","?"]];
    winConditions:number[][][]=[
        [[0,0],[0,1],[0,2]],
        [[1,0],[1,1],[1,2]],
        [[2,0],[2,1],[2,2]],
        [[0,0],[1,0],[2,0]],
        [[0,1],[1,1],[2,1]],
        [[0,2],[1,2],[2,2]],
        [[0,0],[1,1],[2,2]],
        [[0,2],[1,1],[2,0]],
    ];


    public isWin (multi:string[][]){
        let isWin:boolean=false;
        let condition:number[][];
        let whoWin:string;

        for(let i=0; i < this.winConditions.length; i++){
            condition=this.winConditions[i];
            
            let cellA=multi[condition[0][0]][condition[0][1]];
            let cellB=multi[condition[1][0]][condition[1][1]];
            let cellC=multi[condition[2][0]][condition[2][1]];
            
            if(cellA =="?" || cellB =="?" || cellC =="?" ){
                continue;
        }
        if(cellA == cellB && cellB == cellC){
            if(cellA=="X"){
                console.log("Player1 win!");
                console.log("Bye!");  
                process.exit(0);
            }else{
                console.log("Player2 win!");
                console.log("Bye!");  
                process.exit(0);
            }
    }





        }
       
       
    }



    public render(command?:string) {
        
        //console.log('TIC - TAC - TOE');

        if(command==null){
            console.log("Welcom to TIC - TAC - TOE")
            console.log("-------Numbers and places that can be entered for the game----------");
            console.log("---------")
            console.log("1   2   3");
            console.log("4   5   6");
            console.log("7   8   9");
            console.log("---------")

            console.log("Player1 turn" + "(" + this.counter +")" + " => X");
        }
       
        this.isTrue(command);
 
       

       
    }


    public command(command: string) {
        // Perform game logic

    
        if(this.check){

        let index= this.numbers.indexOf(command);
        this.numbers.splice(index,1);

       let place= this.indexPlace(command);
      
       if(this.flag==1){
        this.multi[place[0]][place[1]]="X";
        }else{
        this.multi[place[0]][place[1]]="0";
        }

    console.log(this.multi[0][0] + "  " + this.multi[0][1] + "  " + this.multi[0][2]);
    console.log(this.multi[1][0] + "  " + this.multi[1][1] + "  " + this.multi[1][2]);
    console.log(this.multi[2][0] + "  " + this.multi[2][1] + "  " + this.multi[2][2]);


       this.isWin(this.multi);

         }else{
            console.log("You entered an incorrect number!"); 
        }
        this.check=false;

        if(this.counter==9){
            console.log("Draw!");
            console.log("Bye!");  
            process.exit(0);
        }




    }
   



    public indexPlace(x:string){
        
        let place:number[]=[];

        if(x=="1")  place=[0,0];
        if(x=="2")  place=[0,1];
        if(x=="3")  place=[0,2];
        if(x=="4")  place=[1,0];
        if(x=="5")  place=[1,1];
        if(x=="6")  place=[1,2];
        if(x=="7")  place=[2,0];
        if(x=="8")  place=[2,1];
        if(x=="9")  place=[2,2];

        return place;
    }


    public turn():void{

        if(this.flag==0){
            console.log("Player2 turn" + "(" + this.counter +")" + " => 0");
            this.flag=1;
            this.counter++;

        }else{
            console.log("Player1 turn" + "(" + this.counter +")" + " => X");
            this.flag=0;
        }
        console.log("------------")
}


    public isTrue(command :string | undefined):void{
        this.numbers.forEach((number) => {
            if(number==command){
                this.check=true;
                console.log("true")
                this.turn();
            }
            
          
        })
    }

  



  
}

const game = new Game();

export { game };