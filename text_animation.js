const words = ['I AM XENOFON NIKOLAOS PANTSOS WEB DEVELOPER']
let count =0;
let index=0;
let currentText="";

(function type() {
    document.querySelector('.typewriter').innerText=words[count].slice(0,++index)
    if(index==words[count].length){
        index=0;
        

    }
    if(count>=words.length) count=0;
    setTimeout(type,400);
    
    
})();


