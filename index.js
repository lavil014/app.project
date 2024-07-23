const container = document.getElementById('image-container')
const mainImage = document.getElementById('main-image');
let imageSource = document.getElementById('image-source') ; 
const previousBtb = document.getElementById('previous');
const nextBtn = document.getElementById ('next');
const closeBtn = document.getElementById('close-btn');
const places = document.querySelectorAll('img');
const visitedPlaces = [...places];
let currentImage = 0;

/* Main functions */

const showMainImage = ()=>{
  imageSource.src = event.target.src; 
  mainImage.style.display = 'flex'; 
  container.style.opacity = 0.5;
  visitedPlaces.style.opacity =0.1;
  
}


const showNextImage = ()=>{

  if(currentImage >= visitedPlaces.length -1){
    currentImage = -1;
  }

  currentImage ++;
  imageSource.src = visitedPlaces[currentImage].src;
}


const showPreviousImage = ()=>{

  if(currentImage <= 0){
    currentImage = visitedPlaces.length;
  }

  currentImage --;
  imageSource.src= visitedPlaces[currentImage].src;
}

/* Managing events*/


visitedPlaces.forEach((visitedPlaces)=>{
  visitedPlaces.addEventListener('click',showMainImage);
});

previousBtb.addEventListener('click',showPreviousImage);

nextBtn.addEventListener('click', showNextImage);

closeBtn.addEventListener('click', ()=>{
  mainImage.style.display= 'none';
  container.style.opacity = 1;
});



