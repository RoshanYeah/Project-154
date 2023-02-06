AFRAME.registerComponent("swimming-fish", {
    init: function(){
        
        for(i=1;i<=20;i++){
            var id = `obstacles${i}`;
            var positionX = (Math.random()*3000+ (-1000))
            var positionY = (Math.random()*2 + (-1))
            var positionZ = (Math.random()*1000+ (-1000))
            var position = {x:positionX,y:positionY,z:positionZ}
            
            this.flyingBirds(id,position)   
        }
    },
    flyingBirds: function(id,position){
        var subBirds = document.querySelector("#terrain")
        var bird = document.createElement("a-entity");
        bird.setAttribute("id", id);
        bird.setAttribute("position", position);
        bird.setAttribute("scale", {x:500, y:500, z:500})
        bird.setAttribute("gltf-model","./assets/fish/scene.gltf")
        //animating the model
        bird.setAttribute("animation-mixer",{})
        subBirds.appendChild(bird)
    }
})
