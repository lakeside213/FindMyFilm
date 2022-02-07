
function createLink() {
    let ref = document.referrer;
    let y = ref.split("/");
    let z = y[y.length - 1].slice(0, -5);
    let a = document.createElement("a");

    let text = document.createTextNode(z);
    let link = document.createTextNode(text.data);
    a.appendChild(link);
    a.href = ref;
    a.title = "go back to: " + text.data;
    document.getElementById("refListItem").appendChild(a);
    getTitle();
}

function getTitle() {
    let x = document.URL;
    let y = x.split("/");
    let z = y[y.length - 1].slice(0, -5);
    document.getElementById("currentPage").appendChild(document.createTextNode(z));
}

