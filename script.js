"use strict";

// element class toggle function

const elementToggleFunc = (element) => {
  element.classList.toggle("active");
};

// sidebar

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", () => {
  elementToggleFunc(sidebar);
});



// potfolio show image

const ProjectItem = document.querySelectorAll("[data-filter-item]");
console.log(ProjectItem)
const modalContainer1 = document.querySelector("[data-modal-container1]");
const modalCloseBtn1 = document.querySelector("[data-modal-close-btn1]");
const overlay1 = document.querySelector("[data-overlay1]");

const modalImg1 = document.querySelector("[data-modal-img1]");

// modal tiggle function

const testimonialsModalFunc1 = () => {
  modalContainer1.classList.toggle("active");
  overlay1.classList.toggle("active");
};

for (let i = 0; i < ProjectItem.length; i++) {
  ProjectItem[i].addEventListener("click", () => {
    modalImg1.src = ProjectItem[i].querySelector(
      "[data-project-image]"
    ).src;
   
    testimonialsModalFunc1();
  });
}

modalCloseBtn1.addEventListener("click", testimonialsModalFunc1);
overlay1.addEventListener("click", testimonialsModalFunc1);


// menu navigation

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// nav menu events

for (let k = 0; k < navigationLinks.length; k++) {
  navigationLinks[k].addEventListener("click", () => {
    for (let i = 0; i < pages.length; i++) {
      if (
        navigationLinks[k].innerHTML.toLowerCase() === pages[i].dataset.page
      ) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

// PORTFOLIO

const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", () => {
  elementToggleFunc(select);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", () => {
    let selectedValue = selectItems[i].innerText.toLowerCase();
    selectValue.innerText = selectItems[i].innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = (selectedValue) => {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", () => {
    let selectedValue = filterBtn[i].innerText.toLowerCase();
    selectValue.innerText = filterBtn[i].innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    filterBtn[i].classList.add("active");
    lastClickedBtn = filterBtn[i];
  });
}
