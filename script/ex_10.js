var footer = document.getElementsByTagName("footer")[0];
var blank = footer.getElementsByTagName("div")[0];
var link = document.getElementsByTagName("a")[0];

link.addEventListener('click', function() {
    setCookie();
});


function getCookie() {
    var name = "acceptsCookies" + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookie = decodedCookie.split(';');

    for (var i = 0; i <cookie.length; i++) {
        var c = cookie[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function deleteCookie(){
    console.log("deleting cookie");
    var date = new Date();
    date.setTime(date.getTime() - (1*24*60*60*1000));
    document.cookie = "acceptsCookies=; expires=" + date + "; path=/;";
    document.location.reload(true);
    console.log(document.cookie);
};

function setCookie(cvalue) {
    console.log("creating cookie");
    var d = new Date();
    d.setTime(d.getTime() + (1*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    console.log(expires);
    document.cookie = "acceptsCookies=" + cvalue + ";" + expires + "; path=/";
    console.log(document.cookie);
}


document.addEventListener('Loaded', function() {

    console.log(document.cookie);

    if (document.cookie) 
    	blank.innerHTML = "<button click='deleteCookie()'>Delete the cookie</button>";
});

