
function createLink() {
    var ref = document.referrer;
    var y = ref.split("/");
    var z = y[y.length - 1].slice(0, -5);
    var a = document.createElement("a");

    var text = document.createTextNode(z);
    var link = document.createTextNode(text.data);
    a.appendChild(link);
    a.href = ref;
    a.title = "go back to: " + text.data;
    document.getElementById("refListItem").appendChild(a);
    getTitle();
}

function getTitle() {
    var x = document.URL;
    var y = x.split("/");
    var z = y[y.length - 1].slice(0, -5);
    document.getElementById("currentPage").appendChild(document.createTextNode(z));
}

