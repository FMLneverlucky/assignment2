/*--------------------------------code for subcontent switching-------------------------------------------------------------------*/
const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");
var allpages = document.querySelectorAll(".subcontent");
/* allpages seem to be tied to content under subcontent class
as in diff pages under subcontent class */

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
/*------------------------------------------subcontent switching end------------------------------------------------------------- */

/*------------------------------------------------code for collapsible content--------------------------------------------------- */
const Med_Pg_1 = document.querySelector("#Med_Pg_1");
const Med_Pg_2 = document.querySelector("#Med_Pg_2");
const Med_Pg_3 = document.querySelector("#Med_Pg_3");
var allCollapsibleContent = document.querySelectorAll(".collapsible-content");
console.log(allCollapsibleContent);
/*yes this is copy paste
brain not working to figure how to do in another method or sth */

/*anyways all collapsible pages open by default
clicking header will collapse the section
to do:
change arrow pic to arrow up (content open by default)
hide content when header clicked (collapse content under header)
arrow img change to arrow down when content collapsed */
function toggle_content_visibility(pageNum) {
    let onepage =document.querySelector("#med-pg-" + pageNum);
    if (onepage.style.display == "flex")
    {
        onepage.style.display = "none";
        return;
    }
    /*
    if (onepage.style.display == "none")
    {
        onepage.style.display = "block";
        return;
    }
    */
   else{
    onepage.style.display = "flex";
   }
}
Med_Pg_1.addEventListener("click", function () {toggle_content_visibility(1);} );
Med_Pg_2.addEventListener("click", function () {toggle_content_visibility(2);} );
Med_Pg_3.addEventListener("click", function () {toggle_content_visibility(3);} );
/*-------------------------------------------------collapsible content code end-------------------------------------------------- */

/*---------------------------------------------------questionaire transition here------------------------------------------------ */
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
var allQns = document.querySelectorAll(".form-questions")
console.log(allQns);

/*
function get-qn-num()
{
    document.querySelector(allQns).
}
*/
/*-----------------------------------------------------questionaire transition end----------------------------------------------- */