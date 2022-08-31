const canvas = document.querySelector("canvas"); //도화지
const ctx = canvas.getContext("2d"); //context는 붓 같은거임

canvas.width = 800;
canvas.height = 800;

// (0,0)을 항상 생각하십쇼

// ctx.fillRect(50,50,100,100);

// ctx.rect(50,50,100,100);
// ctx.rect(150,150,100,100);
// ctx.fill();

// ctx.beginPath(); // 새 선 만드는 api
// ctx.rect(250,250,100,100);
// ctx.fillStyle = "red";
// ctx.fill();

//moveTo : 선 없이 좌표를 옮김
//lineTo : 선을 그으면서 좌표를 옮김
// ctx.moveTo(50,50);
// ctx.lineTo(150,50);
// ctx.lineTo(150,150);
// ctx.lineTo(50,150);
// ctx.lineTo(50,50);
// ctx.fill();

//집만들기
ctx.fillRect(200, 200, 50, 200);
ctx.fillRect(400, 200, 50, 200);
ctx.fillRect(300, 300, 50, 100);
ctx.moveTo(200, 200);
ctx.lineTo(325, 100)
ctx.lineTo(450, 200)
ctx.fill();

//사람만들기
//상체
ctx.fillRect(555, 450, 15, 100);
ctx.fillRect(670, 450, 15, 100);
ctx.fillRect(590, 450, 60, 100);

//머리
ctx.beginPath();
ctx.arc(620, 400, 50, 0, 2 * Math.PI);
ctx.fill();

//표정
ctx.beginPath();
ctx.fillStyle = 'white'; // 무언가의 색상을 바꿔주려면 beginPath가 필요한지 먼저 생각해본다
ctx.arc(600, 390, 8, Math.PI, 2 * Math.PI);
ctx.arc(640, 390, 8, Math.PI, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "red";
ctx.arc(620, 410, 25, 0, Math.PI);
ctx.fill();