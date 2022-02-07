
var ref = document.referrer;
var pageTitle = document.title;
var listEntry = document.getElementsByClassName("breadcrumb_item");

var urlsplitter = ref.split("/");
var refTitle = urlsplitter[urlsplitter.length - 2].split(".");

function createLink() {
    var ref = document.referrer;
    var a = document.createElement("a");
    var link = document.createTextNode( "This is Link");
    a.appendChild(link);
    a.href = "https://geeksforgeeks.org";
    a.title = "link";

    document.body.appendChild(a);
}

function getTitle() {
    document.write(document.title);
}

function alert() {
    alert("hello World");
}