const Modal = {
    open(){
        document.querySelector(".modal-overlay").classList.add("active")
    },
    close(){
        document.querySelector(".modal-overlay").classList.remove("active")
    }
}

let data = new Date()
let ano = data.getFullYear()
document.querySelector("#ano").innerHTML = ano