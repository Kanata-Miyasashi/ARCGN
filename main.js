
function startClassifictation() {
    
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/rDSpLGb3U/model.json', modelReady);

}

function modelReady() {

    classifier.classify(gotResults);
}