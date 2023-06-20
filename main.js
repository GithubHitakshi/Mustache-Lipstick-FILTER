nose_x="";
nose_y="";

function setup(){
    canvas =  createCanvas(300,300);
    canvas.center();
   video = createCapture(VIDEO);
   video.hide();
   pose_model = ml5.poseNet(video,model_loaded);
   pose_model.on("pose",get_results);

}

function draw(){
    image(video, 0,0,300,300);
}

function take_pic(){
    save("mypic.png");
}

function model_loaded(){
    console.log("Model Loaded Successfully");
}

function get_results(r){
    if(r.length>0){
      // console.log(r);
       nose_x = r[0].pose.nose.x;
       nose_y = r[0].pose.nose.y;
       console.log("Nose x:"+nose_x,"Nose y:"+nose_y);

        
    }
}