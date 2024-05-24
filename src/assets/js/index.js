// Script to check store mode type. Check before to index load

let sessionMode = sessionStorage.getItem("mode");
if( sessionMode == "light") {
  document.getElementsByTagName("link")[2].setAttribute("href", "./assets/css/light-mode-styles.css");
  //document.getElementById("icon_mode").setAttribute("src", "../assets/icons/moon-blue-100x100.png");
}
else {
  document.getElementsByTagName("link")[2].setAttribute("href", "./assets/css/dark-mode-styles.css");
  //document.getElementById("icon_mode").setAttribute("src", "../assets/icons/sun-blue-64x64.png");
}
