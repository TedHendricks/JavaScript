/* Author: Ted Hendricks */

"use strict";

function slideShow(event) {
    var images = [];
    var FIRSTPHOTO = 0;
    var LASTPHOTO = 19; //By changing this constant photos can be added or subtracted
    var currentPhoto = FIRSTPHOTO; // Start with first photo
    
    //Get references to the HTML elements
    var tdImg = document.getElementById("italyimg");
    var firstBtn = document.getElementById("first");
    var previousBtn = document.getElementById("previous");
    var nextBtn = document.getElementById("next");
    var lastBtn = document.getElementById("last");

    //When first or last image is seleceted disables the appropriate buttons
    function enableDisableBtns() {
        switch (currentPhoto) {
            case FIRSTPHOTO:
                firstBtn.disabled = true;
                previousBtn.disabled = true;
                nextBtn.disabled = false;
                lastBtn.disabled = false;
                break;
            case LASTPHOTO:
                firstBtn.disabled = false;
                previousBtn.disabled = false;
                nextBtn.disabled = true;
                lastBtn.disabled = true;
                break;
            default:
                firstBtn.disabled = false;
                previousBtn.disabled = false;
                nextBtn.disabled = false;
                lastBtn.disabled = false;
        }
    }
    
    // Loads the photo images into an array and displays the first photo
    function loadImages(first, last) {
        for (var i = first; i <= last; i++){
            images[i] = new Image();
            images[i].src = "img/italy" + (i + 1) + ".jpg";
        }
        tdImg.appendChild(images[currentPhoto]);
        enableDisableBtns();
    }
    
    //Loads the first photo in the slide show
    function loadFirst(event) {
        tdImg.removeChild(images[currentPhoto]);
        currentPhoto = FIRSTPHOTO;
        tdImg.appendChild(images[currentPhoto]);
        enableDisableBtns();
    }
    
    // Loads the previous photo in the slide show
    function loadPrevious(event) {
        tdImg.removeChild(images[currentPhoto]);
        currentPhoto--;
        tdImg.appendChild(images[currentPhoto]);
        enableDisableBtns();
    }
    
    //Loads the next photo in the slide show
    function loadNext(event) {
        tdImg.removeChild(images[currentPhoto]);
        currentPhoto++;
        tdImg.appendChild(images[currentPhoto]);
        enableDisableBtns();
    }
    
    // Loads the last photo in the slide show
    function loadLast(event) {
        tdImg.removeChild(images[currentPhoto]);
        currentPhoto = LASTPHOTO;
        tdImg.appendChild(images[currentPhoto]);
        enableDisableBtns();
    }

    // Call function to load images and display the first image
    loadImages(FIRSTPHOTO, LASTPHOTO);
    
    // Add event handler for each buttons
    firstBtn.addEventListener("click", loadFirst, false);
    previousBtn.addEventListener("click", loadPrevious, false);
    nextBtn.addEventListener("click", loadNext, false);
    lastBtn.addEventListener("click", loadLast, false);
}

//Begins the slide show
addEventListener("load", slideShow, false);