// import * as ml5 from 'ml5';

let capture;
let posenet ;
let noseX , noseY;
let singlePose , skeleton;
let reyeX , reyeY ;
let leyeX , leyeY ;


function setup(){
    createCanvas(630 , 500);
    capture = createCapture(VIDEO);
    capture.hide();

    posenet = ml5.poseNet(capture , modelLoaded);
    posenet.on('pose' , receivedPoses);

}

// function getRandomNo(min , max) {
//     return Math.random() * (max - min) + min;
// }

function receivedPoses(poses){
    console.log(poses);

    if(poses.length > 0){
        singlePose = poses[0].pose;
        skeleton = poses[0].skeleton;
        // noseX = singlePose.pose.nose.x;
        // noseY = singlePose.pose.nose.y;

        // reyeX = singlePose.pose.rightEye.x;
        // reyeY = singlePose.pose.rightEye.y;

        // leyeX = singlePose.pose.leftEye.x;
        // leyeY = singlePose.pose.leftEye.y;
    }

    // console.log(noseX + " " + noseY);

}


function modelLoaded() {
    console.log('Model has loaded sucessfully');
}



function draw(){



    image(capture , 0 , 0 , 630 , 500);
    fill(255 , 0 , 0);
    

    if(singlePose){

        // let d = dist(pose.nose.x,pose.nose.y, pose.rightEye.x , pose.rightEye.y);



        for( let i=0 ; i< singlePose.keypoints.length; i++){
            // ellipse(x , y , w , [h])
            ellipse(singlePose.keypoints[i].position.x , singlePose.keypoints[i].position.y , 14);
    
        }

        stroke(255,255,255);
        strokeWeight(3);

        for(let j=0 ; j<skeleton.length; j++){
            line(skeleton[j][0].position.x , skeleton[j][0].position.y,skeleton[j][1].position.x , skeleton[j][1].position.y);
        }



    }







    // ellipse(reyeX , reyeY , 22);
    // ellipse(leyeX , leyeY , 22);
    // fill(0,255,0);
    // ellipse(noseX , noseY , 15);



    // r = getRandomNo(0,255);
    // g = getRandomNo(0,255);
    // b = getRandomNo(0,255);
    // fill(r , g , b);
    // ellipse(mouseX , mouseY , 50 , 50 );

}