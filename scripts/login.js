(function () {
    items = [
        { domain: "", uid: "ssousernameUI", pid: "password", un: null, pn: null, btn: "login", ss: "ajaxLoginValidation();", ifid: "portlet2_iframe", uname: "", pwd: "" },
        { domain: "", uid: "", pid: "", un: "Username", pn:"Password", btn: "mybutton", ifid: null, uname: "", pwd: "" },
    ];
    item = items[items.findIndex(i => i.domain == location.hostname)];    
    d = (item.ifid) ? document.getElementById(item.ifid).contentWindow.document : document;
    if (item.un) d.getElementsByName(item.un)[0].value = item.uname; else d.getElementById(item.uid).value = item.uname;
    if (item.pn) d.getElementsByName(item.pn)[0].value = item.pwd; else d.getElementById(item.pid).value = item.pwd;
    /*if (item.ss) eval(item.ss); else d.getElementById(item.btn).click();*/
    d.forms[0].submit();
})();
