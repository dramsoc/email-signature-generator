window.addEventListener("load", function () {
    updateSignature(document.forms[0]);
});

document.forms[0].addEventListener("change", function (e) {
    console.log("Form has changed",e);
    updateSignature(e.currentTarget);
});

function updateSignature(form) {
    inputs = form.elements;
    for (var i=0; i<form.length; i++) {
        if (val = inputs[i].value) {}
        else if (val = inputs[i].placeholder) {}
        if (document.querySelector("#sig_"+inputs[i].id).innerHTML = val) {}
    }
}
