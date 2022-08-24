function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("node");
        habilidades[4].classList.add("postgresql");
        habilidades[5].classList.add("comunication");
        habilidades[6].classList.add("team");
        habilidades[7].classList.add("leadership");
        habilidades[8].classList.add("selflearner");
        habilidades[9].classList.add("project");
    }
}

window.onscroll = function(){
    efectoHabilidades();
} 