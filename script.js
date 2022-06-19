window.addEventListener("DOMContentLoaded" , () => {
    let counter = 1;
    setInterval(function(){
        document.getElementById('radio'+ counter).checked=true;
        counter++;
        if(counter>4){
            counter=1;
        }
    }, 6000);


    emptyMainContainer();
    displayView('home');



    document.getElementById("onClickHomeButton").addEventListener("click" , () => {
        displayView('home');
    })

    document.getElementById("onClickMenuButton").addEventListener("click" , () => {
        displayView('menu');
    })

    document.getElementById("onClickFeebackButton").addEventListener("click" , () => {
        displayView('feedback');
    })

    document.getElementById("reserve-button").addEventListener("click" , () => {
        displayView('reserve');
    })

    
})

function emptyMainContainer(){
    let views = document.getElementById("main-container").children;
    console.log(views);

    for (let i = 0; i < views.length; i++) {
        console.log(views[i]);
        views[i].setAttribute("style" , "display:none;");
    }
}

function displayView(type){

    emptyMainContainer();

    let views = document.getElementById("main-container").children;

    switch (type) {
        case "home":
            views[0].setAttribute("style" , "display:block;");
            break;
        case "menu":
            views[1].setAttribute("style" , "display:flex;");
            break;
        case "reserve":
            views[2].setAttribute("style" , "display:block;");
            break;
        case "feedback":
            views[3].setAttribute("style" , "display:block;");
            break;
        default:
            break;
    }


    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function Reserve() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "zadecoku@gmail.com",
	Password : "",
	To : 'zadecoku@gmail.com',
	From : "",
	Subject : "Reserve Now",
	Body : "",
	}).then(
		message => alert("Mail sent successfully")
	);
}

function Feedback() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "zadecoku@gmail.com",
	Password : "",
	To : 'zadecoku@gmail.com',
	From : "",
	Subject : "Feedback",
	Body : "",
	}).then(
		message => alert("Mail sent successfully")
	);
}

function order1() {
    document.getElementById("order1").innerHTML = "ORDERED!";
}
function order2() {
    document.getElementById("order2").innerHTML = "ORDERED!";
}
function order3() {
    document.getElementById("order3").innerHTML = "ORDERED!";
}
function order4() {
    document.getElementById("order4").innerHTML = "ORDERED!";
}
function order5() {
    document.getElementById("order5").innerHTML = "ORDERED!";
}
function order6() {
    document.getElementById("order6").innerHTML = "ORDERED!";
}
function order7() {
    document.getElementById("order7").innerHTML = "ORDERED!";
}
function order8() {
    document.getElementById("order8").innerHTML = "ORDERED!";
}
function order9() {
    document.getElementById("order9").innerHTML = "ORDERED!";
}
function order10() {
    document.getElementById("order10").innerHTML = "ORDERED!";
}
function order11() {
    document.getElementById("order11").innerHTML = "ORDERED!";
}
function order12() {
    document.getElementById("order12").innerHTML = "ORDERED!";
}
function order13() {
    document.getElementById("order13").innerHTML = "ORDERED!";
}
function order14() {
    document.getElementById("order14").innerHTML = "ORDERED!";
}
function order15() {
    document.getElementById("order15").innerHTML = "ORDERED!";
}
function order16() {
    document.getElementById("order16").innerHTML = "ORDERED!";
}
function order17() {
    document.getElementById("order17").innerHTML = "ORDERED!";
}
function order18() {
    document.getElementById("order18").innerHTML = "ORDERED!";
}
function order19() {
    document.getElementById("order19").innerHTML = "ORDERED!";
}
function order20() {
    document.getElementById("order20").innerHTML = "ORDERED!";
}
function order21() {
    document.getElementById("order21").innerHTML = "ORDERED!";
}
function order22() {
    document.getElementById("order22").innerHTML = "ORDERED!";
}
function order23() {
    document.getElementById("order23").innerHTML = "ORDERED!";
}
function order24() {
    document.getElementById("order24").innerHTML = "ORDERED!";
}
function order25() {
    document.getElementById("order25").innerHTML = "ORDERED!";
}
function order26() {
    document.getElementById("order26").innerHTML = "ORDERED!";
}
function order27() {
    document.getElementById("order27").innerHTML = "ORDERED!";
}
function order28() {
    document.getElementById("order28").innerHTML = "ORDERED!";
}
function order29() {
    document.getElementById("order29").innerHTML = "ORDERED!";
}
function order30() {
    document.getElementById("order30").innerHTML = "ORDERED!";
}
function order31() {
    document.getElementById("order31").innerHTML = "ORDERED!";
}
function order32() {
    document.getElementById("order32").innerHTML = "ORDERED!";
}
function order33() {
    document.getElementById("order33").innerHTML = "ORDERED!";
}
function order34() {
    document.getElementById("order34").innerHTML = "ORDERED!";
}
