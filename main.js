rightWristY=0;
leftWristY=0;
difference=0;
song1="";
song2="";
function setup(){
    canvas=createCanvas(400,400);
    canvas.centre();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video, modelloaded);
    posenet.on("pose", gotPoses);
    rightWristY = results[0].pose.rightWrist.y;
    song1.loadSound("music.mp3");
    leftWristY = results[0].pose.leftWrist.y;
    song2=loadSound("music2.mp3");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristY=results[0].pose.leftWrist.y;
        rightWristY=results[0].pose.rightWrist.y;
        difference=floor(leftWristY - rightWristY)
        console.log("leftWristx= " + leftWristx + " rightWristx= " + rightWristx + " difference= " + difference);
    }
    
}
function modelloaded(){
    console.log("posenet is initialized");
}
function draw() {

    image(video, 0, 0, 600, 500);
    
    songl =song1.isPlaying(); song2= song2.isPlaying();
    
    fill("#FF0000"); stroke("#FF0000");
    
    if(difference > 0.2)
    
    circle(rightwristx, rightwristy, 20);
    
    song2.stop();
    
    if(song1= false) {
    
    songl.play();
    
    document.getElementById("song1").innerHTML  + "Playing Harry Potter Theme Song";
    
    }
    
    }
    
    if(scoreLefthrist > 0.2){
    
    circle(leftwristx, lefturisty, 20);
    
    song1.stop();
    }
    
    if(song2= false);
    
    song2.play();
    
    document.getElementById("song").innerHTML + "Playing Peter Pan Song";

    }
function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3")
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}