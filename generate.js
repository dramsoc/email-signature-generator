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
        if (inputs[i].value) {
            val = inputs[i].value;
        }
        else if (inputs[i].placeholder) {
            val = inputs[i].placeholder;
        }
        let block = document.querySelector("#sig_"+inputs[i].id);
        if (block) {
            block.innerHTML = val;
        }
    }
}

function copySignature() {
    let text = document.getElementById("signature").innerHTML;
    let blob = new Blob([text], {type: 'text/html'});
    let data = [new ClipboardItem({ "text/html": blob })]; 
    navigator.clipboard.write(data).then(function(){addButtonClass("btn-success");},function(){addButtonClass("btn-danger");});
    
    // navigator.permissions.query({ name: 'clipboard-write' }).then(result => {
    //     if (result.state == 'granted') {
    //         // do copy
    //     } else {
    //         addButtonClass("btn-danger");
    //     }
    // });

    function addButtonClass(theClass) {
        classes = document.getElementsByTagName("button")[0].classList;
        classes.add(theClass);
        window.setTimeout(function(){classes.remove(theClass);},1000);
    }
}
