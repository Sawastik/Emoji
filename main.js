Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:100
    
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= '<img id="captured_image" src="'+data_uri+'">';

    });

}
console.log("ml5 version: ",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/p3xP2mkMF/model.json",modelLoded);
 function modelLoded(){
    console.log("model is Loded");
 }

  function speak(){
    var synth=window.speechSynthesis;
    speak_data1="The First Prediction is :"+prediction1;
    speak_data2="The Second Prediction is :"+prediction2;
    var utterThis=new SpeechSynthesisUtterance(speak_data1+speak_data2);
    synth.speak(utterThis);

  }
  function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img,gotResult);

  }
function gotResult(error,results){
    if(error){
        console.error(error);    
    }

        else{
            console.log(results);
            document.getElementById("result_name").innerHTML=results[0].label;
            document.getElementById("result_name2").innerHTML=results[1].label;
            prediction1=results[0].label;
            prediction2=results[1].label;
            speak();
            if(results[0].label=="Victory"){
                document.getElementById("update_emoji").innerHTML="✌️"
            }
            if(results[0].label=="Thumbs up"){
                document.getElementById("update_emoji").innerHTML="👍"
            }
            if(results[0].label=="Clap"){
                document.getElementById("update_emoji").innerHTML="👏"
            }
            if(results[0].label=="Pointing Up"){
                document.getElementById("update_emoji").innerHTML="👆"
            }
        
                     if(results[0].label=="Excellent"){
            document.getElementById("update_emoji").innerHTML="👌"


        }
        if(results[1].label=="Victory"){
            document.getElementById("update_emoji2").innerHTML="✌️"
        }
        if(results[1].label=="Thumbs up"){
            document.getElementById("update_emoji2").innerHTML="👍"
        }
        if(results[1].label=="Clap"){
            document.getElementById("update_emoji2").innerHTML="👏"
        }
        if(results[1].label=="Pointing Up"){
            document.getElementById("update_emoji2").innerHTML="👆"
        }
    
                 if(results[1].label=="Excellent"){
        document.getElementById("update_emoji2").innerHTML="👌"
    }
}
    }

