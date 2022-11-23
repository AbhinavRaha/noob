right_x=0;
left_x=0;
differnce=0;

function setup()
{
canvas=createCanvas(500,300);
canvas.position(750,200);
viddeo=createCapture(VIDEO);
viddeo.size(500,300);
posenet=ml5.poseNet(viddeo,moldLode);
posenet.on('pose',gotPoses);
}


function moldLode()
{
    
}

function gotPoses(results)

    {
        
    }

    function draw()
{


}

