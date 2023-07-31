const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");
var allpages = document.querySelectorAll(".subcontent");

console.log(allpages);

/*function to hide all subcontents by default*/
function hideall() {
    for (let onepage of allpages) { /*go through all sub topic pages*/
        onepage.style.display = "none"; /*hide page*/
    }
}
hideall();

/*function to show only a page when clicked(? technically theres no eventlistener but at least thats what its doing i guess)*/
function show(pgNo) {
    hideall(); /*to show only one page at a time, so if a page is shown before, hide it*/
    let onepage = document.querySelector("#page" + pgNo); /*reminder that all ids are in page follow by number while class is called subcontent*/
    onepage.style.display = "block";
}

/*eventlistener so clicking on buttons actually works*/
page1btn.addEventListener("click", function () {show(1);} );
page2btn.addEventListener("click", function () {show(2);} );
page3btn.addEventListener("click", function () {show(3);} );