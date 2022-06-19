import "../sass/index.sass"

document.querySelectorAll(".asks__list-point").forEach((elem, i) => {
    elem.onclick = () => {
        if (elem.querySelector(".asks__point-text-wrapper").classList.contains("asks__point-text-wrapper_showed")) {
            elem.querySelector(".asks__point-text-wrapper").classList.add("asks__point-text-wrapper_hidden")
            elem.querySelector(".asks__point-text-wrapper").classList.remove("asks__point-text-wrapper_showed")
            elem.querySelector(".asks__point-title").classList.remove("asks__point-title_showed")
            elem.querySelector(".asks__point-btn").classList.remove("asks__point-btn_showed")
            elem.querySelector(".asks__point-btn").classList.add("asks__point-btn_hide")
            elem.querySelector(".asks__point-btn-vertical").classList.remove("asks__point-btn-vertical_showed")
            elem.querySelector(".asks__point-btn-horizontal").classList.remove("asks__point-btn-horizontal_showed")
        } else {
            elem.querySelector(".asks__point-text-wrapper").classList.add("asks__point-text-wrapper_showed")
            elem.querySelector(".asks__point-text-wrapper").classList.remove("asks__point-text-wrapper_hidden")
            elem.querySelector(".asks__point-title").classList.add("asks__point-title_showed")
            elem.querySelector(".asks__point-btn").classList.add("asks__point-btn_showed")
            elem.querySelector(".asks__point-btn").classList.remove("asks__point-btn_hide")
            elem.querySelector(".asks__point-btn-vertical").classList.add("asks__point-btn-vertical_showed")
            elem.querySelector(".asks__point-btn-horizontal").classList.add("asks__point-btn-horizontal_showed")
        }
        
    }
})

document.querySelectorAll(".about__form-selector").forEach((elem, i) => {
    elem.onclick = () => {
        if (elem.classList.contains("about__form-selector_dropdown-showed")) {
            elem.classList.remove("about__form-selector_dropdown-showed")
            elem.classList.add("about__form-selector_dropdown-hidden")
            elem.querySelector(".about__form-selector-dropdown").classList.remove("about__form-selector-dropdown_showed")
            elem.querySelector(".about__form-selector-dropdown").classList.add("about__form-selector-dropdown_hidden")
        } else {
            if (document.getElementsByClassName("about__form-selector-dropdown_showed").length > 0) {
                document.querySelectorAll(".about__form-selector").forEach((selector, i) => {
                    if (selector.classList.contains("about__form-selector_dropdown-showed")) {
                        selector.classList.remove("about__form-selector_dropdown-showed")
                        selector.classList.add("about__form-selector_dropdown-hidden")
                        selector.querySelector(".about__form-selector-dropdown").classList.remove("about__form-selector-dropdown_showed")
                        selector.querySelector(".about__form-selector-dropdown").classList.add("about__form-selector-dropdown_hidden")
                    }
                })
            }

            elem.classList.add("about__form-selector_dropdown-showed")
            elem.classList.remove("about__form-selector_dropdown-hidden")
            elem.querySelector(".about__form-selector-dropdown").classList.add("about__form-selector-dropdown_showed")
            elem.querySelector(".about__form-selector-dropdown").classList.remove("about__form-selector-dropdown_hidden")
        }
    }

    elem.querySelectorAll(".about__form-selector-dropdown-point").forEach((point, g) => {
        point.onclick = () => {
            var new_value = point.children[0].innerText

            elem.querySelector(".about__form-real-selector").value = new_value
            elem.querySelector(".about__form-selector-header").innerText = new_value
        }
    })
})

