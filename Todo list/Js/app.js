console.log("Welcome");
displaylist();
let clkbtn = document.getElementById("addbtn");

clkbtn.addEventListener("click", function (e) {
    let work = document.getElementById("txtarea");
    //console.log(work.value);
    //console.log(notes);
    if(work.value!="")
    {
    let notesfluid = localStorage.getItem("notes");
    if (notesfluid == null) {
        notesarray = [];
    }
    else {
        notesarray = JSON.parse(notesfluid);
    }
    notesarray.push(work.value);
    localStorage.setItem("notes", JSON.stringify(notesarray));

    //console.log(notesarray);
    work.value = "";
    displaylist();
}

})


function displaylist() {

    let notesfluid = localStorage.getItem("notes");

    if (notesfluid == null) {
        notesarray = [];
    }
    else {
        notesarray = JSON.parse(notesfluid);
    }

    let html = "";

    for (let i = 0; i < notesarray.length; i++) {
        html += `<div class=" noteCard card my-5 mx-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Task ${i + 1}</h5>
            <p class="card-text">${notesarray[i]}</p>
            <a href="#"  id = "${i}" onclick="deletenote(this.id)" class="btn btn-primary">Delete</a>
        </div>
    </div>`;
    }

    let disnotes = document.getElementById("notes");
    if (notes.length != 0) {
        disnotes.innerHTML = html;
    }
    disnotes.innerHTML = html;

}


function deletenote(num) {

    let notesget = localStorage.getItem("notes");
    if(notesget == null)
    {
        notesarray = [];
    }
    else
    {
        notesarray = JSON.parse(notesget);
    }
    notesarray.splice(num,1);
    localStorage.setItem("notes",JSON.stringify(notesarray));
    displaylist();

}

let search = document.getElementById("srch");

search.addEventListener("input",function (){
    let s= search.value;
 //   console.log(s);
})
