class Navbar {
    constructor(target, menu) {
        // 1. Check parameters type and throw error if not an HTML element
        if (!(target instanceof HTMLElement && menu instanceof HTMLElement)) {
            throw new TypeError("The Target and Menu arguments must be a DOM element.");
        }

        this.isOpen = false;
        this.btn = target;
        this.menu = menu;
        this.btn.addEventListener('click', () => {
            this.open();
        });
    }

    open() {
        if (this.isopen) {
            this.menu.classList.add('nav-hidden');
        } else {
            this.menu.classList.remove('nav-hidden');
        }
        this.isopen = !this.isopen;
    }
}

class Dropdown {
    constructor(elem) {
        if (!(elem instanceof HTMLElement)) {
            throw new TypeError("The element must be an HTML element.");
        }

        this.isOpen = false;
        this.elem = elem;
        this.elem.addEventListener('click', () => {
            this.open();
        });
    }

    open() {
        if (!this.isOpen) {
            this.elem.querySelector(".dropdown-list").classList.add("show-dropdown");
        } else {
            this.elem.querySelector(".dropdown-list").classList.remove("show-dropdown");
        }
        this.isOpen = !this.isOpen;
    }
}

const dropdown = new Dropdown(document.querySelector(".dropdown"));

const navbar = new Navbar(
    document.querySelector(".menu-btn"),
    document.querySelector(".menu-list")
);