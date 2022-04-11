img="";
marioX=325;
marioY=325;

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_gameOver = loadSound("gameover.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent("canvas");
	video=createCapture(VIDEO);
	video.size(600,300);
	video.parent("game");

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on("pose",gotPoses);
}

function modelLoaded(){
	console.log("Model is loaded!");
}

function gotPoses(error , results){
	if(error){
		console.error(error);
	}
	else{
		console.log(results);
		noseX =results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}



function draw() {
	game();
}






