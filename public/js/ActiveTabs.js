var tabs = document.querySelectorAll(".tabs a")

tabs.forEach(element => {
    element.addEventListener("click", function(e) {
        var div = element.parentNode
        var a = this
        console.log(a)
        console.log(div)
        if(this.parentNode.classList.contains("active")){
            return false
        }

        //Titre onglet
        div.querySelector(".tabs .active").classList.remove("active")
        a.classList.add("active")
    })
});