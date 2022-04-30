difference=0;
rightWristX=0;
leftWristX=0;

function setup(){
    canvas = createCanvas(550,500);
    canvas.position(450,500);
   
    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(950,500)

    

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background("#ffffff");
    textSize(difference);
    fill('#F90093');
    stroke('#F90093');
    text('Vyom', 50, 400);
}

function modelLoaded(){
    console.log("PoseNet is Initialized!");
}

function gotPoses(results){
    if(results.length >0)
    {
        console.log(results);


        leftWristX = results[0].pose.leftWrist.x;
       rightWristX  = results[0].pose.rightWrist.y;
       difference= floor(leftWristX - rightWristX);
    }
}