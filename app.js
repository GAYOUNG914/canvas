const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineWidth = document.getElementById("line-width");
const colorCollect = document.getElementById("color");
const colorOptions = Array.from(document.getElementsByClassName("color-option")) //forEach로 color-option 각각에 이벤트 걸어주려면 유사배열이 아니라 찐 배열이어야함. 그래서 Array.from으로 배열 만들어줌
const modeBtn = document.getElementById("mode-btn");
const destroyBtn = document.getElementById("destroy-btn");
const erasorBtn = document.getElementById("erase-btn");
const fileInput = document.getElementById("file");

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

ctx.lineWidth = lineWidth.value;

const colors = [
    "#FFC312",
    "#C4E538",
    "#12CBC4",
    "#FDA7DF",
    "#ED4C67",
    "#9980FA"
]
let isPainting = false;
let isFilling = false;

function onMove(e) {
    // const color = colors[Math.floor(Math.random() * colors.length)] //랜덤한 속성 뽑기
    if(isPainting){
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        return;
    }
    ctx.moveTo(e.offsetX, e.offsetY);
}

function startPainting(){
    isPainting = true;//그림 그릴 수 있음
}

function cancelPainting(){
    isPainting = false;//그림 못 그림, 마우스 좌표만 바뀜
    ctx.beginPath(); //모든 라인은 같은 path기 때문에 한번 그렸으면 path  끊어줘야함
}

function onLineWidthChange(e){
    ctx.lineWidth = e.target.value;
}

function onColorChange(e){
    ctx.strokeStyle = e.target.value;
    ctx.fillStyle = e.target.value;
}

function onColorClick(e){
    // console.dir(e.target.dataset.color)
    const colorValue = e.target.dataset.color;
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    colorCollect.value = colorValue;
}

function onModeClick(){
    if(isFilling){
        isFilling = false;
        modeBtn.innerText = "Fill"

    }else{
        isFilling = true
        modeBtn.innerText = "Draw"
    }
}

function onCanvasClick(){
    if(isFilling){
        ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
    }
}

function onDestroyClick(){
    ctx.fillStyle = "white"
    ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
}

function onErasorClick(){
    ctx.strokeStyle = "white"
    isFilling = false;
    modeBtn.innerText = "Fill"
    // ctx.stroke();
}

function onFileChange(e){
    const file = e.target.files[0];
    const url = URL.createObjectURL(file); //브라우저를 위한 url 추출
    console.log(url);
}

canvas.addEventListener("mousemove",onMove);
canvas.addEventListener("mousedown",startPainting);
canvas.addEventListener("mouseup",cancelPainting);
canvas.addEventListener("click", onCanvasClick);
canvas.addEventListener("mouseleave",cancelPainting)

lineWidth.addEventListener("change", onLineWidthChange);
colorCollect.addEventListener("change", onColorChange);

colorOptions.forEach(color => color.addEventListener("click",onColorClick));
modeBtn.addEventListener("click",onModeClick);
destroyBtn.addEventListener("click",onDestroyClick);
erasorBtn.addEventListener("click",onErasorClick);
fileInput.addEventListener("change",onFileChange);