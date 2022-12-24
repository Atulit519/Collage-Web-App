speechRecognition = window.webkitSpeechRecognition;
recognize = new speechRecognition;
content = "";

function start() {
    recognize.start()
}

recognize.onresult = function (hello) {
    console.log(hello);
    content = hello.results[0][0].transcript.toLowerCase();
    if (content == "selfie") {
        speak();
    }
}

Webcam.set({
    width: 400,
    height: 400,
    img_format: 'png',
    png_quality: 90,
});

Webcam.attach("#camera");

function speak() {
    synth = window.speechSynthesis;
    speak_data = "Taking your selfie in 5 seconds";
    utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    setTimeout(function () {
        synth = window.speechSynthesis;
        img_id = "selfie_1";
        save();
        speak_data = "Taking your next selfie in 10 seconds";
        utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);

    }, 5000)

    setTimeout(function () {
        synth = window.speechSynthesis;
        img_id = "selfie_2";
        save();
        speak_data = "Taking your next selfie in 15 seconds";
        utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);

    }, 10000)

    setTimeout(function () {
        synth = window.speechSynthesis;
        img_id = "selfie_3";
        save();

    }, 15000)
}

function save() {
    console.log(img_id);

    Webcam.snap(function (data_uri) {
        if (img_id == "selfie_1") {
            document.getElementById("result1").innerHTML = '<img id="selfie_1" src="' + data_uri + '">'
        }
        if (img_id == "selfie_2") {
            document.getElementById("result2").innerHTML = '<img id="selfie_2" src="' + data_uri + '">'
        }
        if (img_id == "selfie_3") {
            document.getElementById("result3").innerHTML = '<img id="selfie_3" src="' + data_uri + '">'
        }
    });
}