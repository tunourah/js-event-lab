
let text =document.getElementById("text") 
let img = document.getElementById('Image');
let buttonimage =document.getElementById("buttonsix")
document.getElementById("buttonone").addEventListener("click", function(){
 
    text.textContent = "Hello World!";
 });

 document.getElementById("buttontwo").addEventListener("click", function(){
    
       text.style.fontSize = "4rem";
    });

    document.getElementById("buttonthree").addEventListener("click", function(){
    
        text.style.fontSize = "0.5rem";
     });
     
      
     document.getElementById("buttonfour").addEventListener("click", function(){
        text.style.fontSize = "2rem";
        text.style.color = "blue";
     });
     document.getElementById("buttonfive").addEventListener("click", function(){
        text.style.fontSize = "2rem";
        text.style.backgroundColor = "skyblue";
     });
     buttonimage.addEventListener("click", function() {
        img.style.display = "block";
        img.src = "https://images.pexels.com/photos/20821498/pexels-photo-20821498/free-photo-of-a-cake-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load";
    });
    
    buttonimage.addEventListener("dblclick", function() {
        img.style.display = "block";
        img.src = "https://images.pexels.com/photos/8462116/pexels-photo-8462116.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load";
    });