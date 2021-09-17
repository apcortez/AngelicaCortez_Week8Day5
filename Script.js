function changeButton() {

    let emailInput = document.getElementById("email").value;
    let button = document.getElementById("subscribeON");

    if (emailInput != "") {
        button.disabled = "";
    }
}

function Subscribing() {
    let email = document.getElementById("email").value;

    if (email != "") {
        localStorage.setItem('Email', email);
        document.getElementById("myForm").style.display = "none";
        document.getElementById("subscribeOFF").style.display = "";
    }
}

function Unsubscribing() {
    localStorage.clear();
    document.getElementById("myForm").style.display = "";
    document.getElementById("subscribeOFF").style.display = "none";
    document.getElementById("subscriber").style.display = "none";
}

function checkSubscribed() {
    let emailStored = localStorage.getItem('Email');

    if (emailStored != null) {
        document.getElementById("myForm").style.display = "none";
        document.getElementById("subscriber").innerHTML = localStorage.getItem('Email');
        document.getElementById("subscribeOFF").style.display = "";
    }
}
