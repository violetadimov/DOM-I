const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    "cta": {
        "h1": "DOM Is Awesome",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
console.log(logo);
//Task 1: Create selectors to point your data into elements

// * [] Create selectors by using any of the DOM element's methods
//   * [] Note that IDs have been used on all images.Use the IDs to update src path content
//  CTA-IMG
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])
console.log(ctaImg);

// MAIN CONTENT
let mainContent = document.getElementById("middle-img");
mainContent.setAttribute('src', siteContent["main-content"]["middle-img-src"])
console.log(mainContent);


// Task 2: Update the HTML with the JSON data
//  [ ] Using your selectors, update the content to match the example file
// Remember to update the src attributes on images
// nav anchor
let anchor1 = document.querySelector("nav a:nth-of-type(1)");
anchor1.textContent = siteContent["nav"]["nav-item-1"];
let anchor2 = document.querySelector("nav a:nth-of-type(2)");
anchor2.textContent = siteContent["nav"]["nav-item-2"];
let anchor3 = document.querySelector("nav a:nth-of-type(3)");
anchor3.textContent = siteContent["nav"]["nav-item-3"];
let anchor4 = document.querySelector("nav a:nth-of-type(4)");
anchor4.textContent = siteContent["nav"]["nav-item-4"];
let anchor5 = document.querySelector("nav a:nth-of-type(5)");
anchor5.textContent = siteContent["nav"]["nav-item-5"];
let anchor6 = document.querySelector("nav a:nth-of-type(6)");
anchor6.textContent = siteContent["nav"]["nav-item-6"];

// H1

let mainTitle = document.querySelector(".cta-text h1");
mainTitle.textContent = siteContent["cta"]["h1"];

// button

let button = document.querySelector(".cta-text button");
button.textContent = siteContent["cta"]["button"];

// main content h4 and p
let title1 = document.querySelector(".top-content .text-content:nth-of-type(1) h4");
title1.textContent = siteContent["main-content"]["features-h4"];
let paragragh1 = document.querySelector(".text-content:nth-of-type(1) p");
paragragh1.textContent = siteContent["main-content"]["features-content"];

let title2 = document.querySelector(".top-content .text-content:nth-of-type(2) h4");
title2.textContent = siteContent["main-content"]["about-h4"];
let paragragh2 = document.querySelector(".text-content:nth-of-type(2) p");
paragragh2.textContent = siteContent["main-content"]["about-content"];
//  bottom content

let bottomTitle1 = document.querySelector(".bottom-content .text-content:nth-of-type(1) h4");
bottomTitle1.textContent = siteContent["main-content"]["services-h4"];
let bottomParagragh1 = document.querySelector(".bottom-content .text-content:nth-of-type(1) p");
bottomParagragh1.textContent = siteContent["main-content"]["services-content"];

let bottomTitle2 = document.querySelector(".bottom-content .text-content:nth-of-type(2) h4");
bottomTitle2.textContent = siteContent["main-content"]["product-h4"];
let bottomParagragh2 = document.querySelector(".bottom-content .text-content:nth-of-type(2) p");
bottomParagragh2.textContent = siteContent["main-content"]["product-content"];

let bottomTitle3 = document.querySelector(".bottom-content .text-content:nth-of-type(3) h4");
bottomTitle3.textContent = siteContent["main-content"]["vision-h4"];
let bottomParagragh3 = document.querySelector(".bottom-content .text-content:nth-of-type(3) p");
bottomParagragh3.textContent = siteContent["main-content"]["vision-content"];

// contact

let contactTitle = document.querySelector(".contact h4");
contactTitle.textContent = siteContent["contact"]["contact-h4"];
let contactParagragh1 = document.querySelector(".contact p:nth-of-type(1)");
contactParagragh1.textContent = siteContent["contact"]["address"];

let contactParagragh2 = document.querySelector(".contact p:nth-of-type(2)");
contactParagragh2.textContent = siteContent["contact"]["phone"];

let contactParagragh3 = document.querySelector(".contact p:nth-of-type(3)");
contactParagragh3.textContent = siteContent["contact"]["email"];

let footerContent = document.querySelector("footer p");
footerContent.textContent = siteContent["footer"]["copyright"];

// Task 3: Add new content
/* 
*[] Change the color of the navigation text to be green.

*[] Utilize `.appendChild()`and `.prepend()`
to add two new items to the navigation system.
You can call them whatever you want.

*[] Check your work by looking at the[original html](original.html) in the browser 
*/
let navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
    link.style.color = "green"
});
let nav = document.querySelector("nav");

let anchor7 = document.createElement("a");
anchor7.href = "#";
anchor7.textContent = "Gallery";
nav.appendChild(anchor7);

let anchor8 = document.createElement("a");
anchor8.href = "#";
anchor8.textContent = "Home";
nav.prepend(anchor8);

let navLinks2 = document.querySelectorAll("nav a");
navLinks2.forEach(link => {
    link.style.color = "green"
});