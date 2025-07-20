let boxes = document.querySelectorAll(".box");
let res=document.querySelector(".reset");
let newbtn=document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;//playerX ,PlayerO
const winPat=[
    [0,1,2], [0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
];
const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};
boxes.forEach((box) => {
    box.addEventListener("click" , ()=>{
        console.log("Box was clicked")
        if(turnO==true){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    });
    
});
const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };
  
  const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };
const showWinner=(winner)=>{
    msg.innerText=`Congrats!! Winner is Player ${winner}`;
    msgContainer.classList.remove("hide");
}
const checkwinner =()=>{
    for(let p of winPat){
        //console.log(p[0],p[1],p[2])
        //console.log(boxes[p[0]].innerText,boxes[ p[1]].innerText, boxes[p[2]].innerText);
        let pos1=boxes[p[0]].innerText;
        let pos2=boxes[p[1]].innerText;
        let pos3=boxes[p[2]].innerText;
        if(pos1 != "" && pos2 !="" && pos3 != ""){
            if(pos1 == pos2 && pos2 == pos3){
                console.log("winner", pos1);
                showWinner(pos1);

            }
        }
    }
};
newbtn.addEventListener("click", resetGame);
res.addEventListener("click", resetGame);