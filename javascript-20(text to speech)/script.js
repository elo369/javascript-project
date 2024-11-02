let speech = new SpeechSynthesisUtterance();

let voices =[];

let voiceSelect = document.querySelector("select");
let button = document.querySelector("button");
let textarea = document.querySelector("textarea")


window.speechSynthesis.onvoiceschanged=()=>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice,i)=> (voiceSelect.options[i]= new Option(voice.name,i)))
};

voiceSelect.addEventListener("change",()=>{
    speech.voice = voices[voiceSelect.value];
})

button.addEventListener('click',()=>{
    speech.text=textarea.value
    window.speechSynthesis.speak(speech)
})

