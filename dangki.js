function dn() {
    document.getElementById("dangnhapForm").classList.add("active");
    document.getElementById("dangkiForm").classList.remove("active");

    document.querySelectorAll(".tab")[0].classList.add("active");
    document.querySelectorAll(".tab")[1].classList.remove("active");
}

function dk() {
    document.getElementById("dangkiForm").classList.add("active");
    document.getElementById("dangnhapForm").classList.remove("active");

    document.querySelectorAll(".tab")[1].classList.add("active");
    document.querySelectorAll(".tab")[0].classList.remove("active");
}
