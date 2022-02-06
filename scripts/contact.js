let url = "https://docs.google.com/forms/d/e/1FAIpQLSc3aVRyiKkOPakXw2RFwjN2HtWTLaxGD5LfiYI1BmhI2g9TsQ/formResponse";
let form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(url, {
        method: "POST",
        mode: "no-cors",
        header: {'Content-Type': 'application/json'},
        body: getInputData()
    });
    
    form.removeChild(document.getElementById("name"));
    form.removeChild(document.getElementById("email"));
    form.removeChild(document.getElementById("text"));
    form.removeChild(document.getElementById("submit"));
    document.getElementById("success").style.display = "flex";
});

function getInputData() {
    let dataToPost = new FormData();
    dataToPost.append("entry.217676462", document.querySelector("#name").value);
    dataToPost.append("entry.1097892163", document.querySelector("#email").value);
    dataToPost.append("entry.1427860985", document.querySelector("#text").value);
    return dataToPost;
}
