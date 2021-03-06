const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');
const navLink = document.querySelectorAll('.nav-link');

//Select tab content item
function selectItem(){
    removeBorder();
    removeAtiveNav();
    removeShow();
    //Add border to current tab
    this.classList.add('tab-border');
    //Grab content item from DOM
    //console.log(this.id);
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    //Add show class
    tabContentItem.classList.add('show');
}

function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));    
}

function removeAtiveNav(){
	navLink.forEach(item => item.classList.remove('active'));
}

function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'));
}

tabItems.forEach(item => item.addEventListener('click', selectItem));