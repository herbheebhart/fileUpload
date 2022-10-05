var text = document.getElementById("text");
var img_box = document.querySelector("#img_box")
var textBox = document.getElementById("preTextBox")
text.onkeyup = text.onkeypress = function(){
  textBox.innerHTML = this.value
}
var loadFile = function(event){
    img_box.style.backgroundImage = "url("+URL.createObjectURL(event.target.files[0]) +")"
}
