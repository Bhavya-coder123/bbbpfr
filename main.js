
noseX=0;
noseY=0;




function preload(){
   mustache=loadImage("https://i.postimg.cc/y8ZgrHvN/mus.png");

   

}


 function setup(){
    canvas=createCanvas(350,350);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(350,350);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);   
 }



 function modelLoaded(){
    console.log('Model is loaded');
 }



 function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;

        console.log("nose x=" +noseX)
        console.log("nose y=" +noseY)
    }

 }



 function draw(){
    image(video,0,0,350,350);
    image(mustache,noseX-12,noseY+10,30,30);
    
    // fill("red");
    // stroke("white")
    // circle(noseX,noseY,20);
    
    
 }


 function take_snap(){
    save('BJ.png');
}