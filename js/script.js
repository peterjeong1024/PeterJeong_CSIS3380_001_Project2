// define the HTML classes variables
const contactList = document.getElementsByClassName("contact-list")[0];
const dataList = document.getElementsByClassName("contact-item cf");
const pageLinkArea = document.getElementsByClassName("pagination")[0];

// if page number value is existed, store it
var pageNumber = 0;
const getvalue = location.href.split('index.html');
if (getvalue[1] !== "") {
    pageNumber = getvalue[1].split('?')[1];
}

// display contact list vased on page number
var dataAmount = dataList.length;
var htmlText = "";
for (let i = pageNumber * 10; i <= pageNumber * 10 + 9; i++) {
    if (i > dataList.length - 1) {
        break;
    }
    htmlText += dataList[i].outerHTML;
}
contactList.innerHTML = htmlText;

// display page number list
htmlText = "";
for (let i = 1; i <= Math.ceil(dataAmount / 10); i++) {
    htmlText += '<li><a href="index.html?' + (i - 1) + '">' + i + '</a></li>';
}
pageLinkArea.innerHTML = htmlText;