function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
;


//let welcm = null;
//funition init(){
//  welcm= document.getElementsByClassName(startup);
/*window.onload = function () {
    var areWeReady = false;
    setTimeout(function () {
        areWeReady = true;
    }, 5000);}
document.querySelector('body').addEventListener('click', function () {
    if (areWeReady) {
        var main = document.getElementsByClassName('.tabcontent');
        document.getElementsByClassName('.startup').style.display = 'none';
        setTimeout(function () {
            main.style.display = 'none';
        }, 100);
    }*/
/*function tap() {
    var element = document.getElementById("startin");
    element.remove("");}
*/
console.log('perfeto')
function openPage(Name, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "";


    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    // Show the specific tab content
    document.getElementById(Name).style.display = "block";

    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
};
// Get the element with id="defaultOpen" and click on it
//document.getElementById("defaultOpen").click();
/*function validate(){ 
    let username=document.form.username.value;
    let password= document.form.password.value;
    console.log(username,value)

    if (username==null|| username==""){
        alert("username cant be blank");
        return false;
    }
    else if (password .length<8){
        prompt("password must be at least 8 charaters long");
        return false;
    }
}*/
/*let password = document.querySelector(".password")
let username = document.querySelector(".username")

var myform = document.getElementById('myform')
myform.addEventListener('submit',validate(password,username,e))
function validate(password, username, e){
    e.preventDefault()
    if (password.length > 4){
        return false
    }
}*/

function homepage() {
    // Hide all elements with class="tabcontent" by default */
    /*let a, hcontent, sub;
    hcontent = document.getElementsById("hcontent");
    for (a = 0; a > hcontent.length; a++) {
    hcontent[a].style.display = ``;*/
    document.getElementById('hcontent').style.display = "block";
}

/* // Remove the background color of all tablinks/buttons
 sub = document.getElementsById("sub");
 for (a = 0; a < sub.length; i++) {
    sub[a].style.backgroundColor = "";
 }
 
 // Show the specific tab content
 document.getElementsByClassName(Name).style.display = "block";

 // Add the specific color to the button used to open the tab content*/


