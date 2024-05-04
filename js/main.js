
// start mini slider news
let newsBtn = document.querySelectorAll(".news_btn"),
    newsParagraph = document.querySelectorAll(".news_para"),
    newsCounter = 0;

    function news(check) {
      function newsMove() {
        newsParagraph.forEach(e => {
          e.style = `transform : translateX(-${newsCounter}px)`
          });
      }
      if(check === "left"){
      if ( newsCounter >=newsParagraph[1].clientWidth*2) {
              newsCounter = 0;
              newsMove();
            }
      else {
        newsCounter += newsParagraph[1].clientWidth;
        newsMove();
      }

      }
      if(check === "right"){
      if (newsCounter !== 0) {
        newsCounter -= newsParagraph[1].clientWidth;
                        newsMove();
      }
      else {
        newsCounter = newsParagraph[1].clientWidth*2;
      newsMove();
      }


      }

    };
    let parameter = ["left","right"];
    newsBtn.forEach((e,i) =>{
      e.addEventListener('click',()=>{
        news(parameter[i]);

      });
    });


// end slider


//  start slider _1 main promotion
let promotionSldBtn = document.querySelectorAll('.sld_btn'),
    promotionSldBoxes = document.querySelectorAll('.box-content-slider'),
    promotionCurserSld = document.querySelectorAll('.span-circles-slide span '),
    promotionSldCounter = [0,0];
    promotionCurserSld[promotionSldCounter[1]].style = `background : #fff`;

function slider_1(check,sliderElem,curserElem,sldCounter) {
  /**
   *  sliderElem == slider boxes (content)
   *
   *  curserElem ==  cursor effect [o o o]
   *  sldCounter ==  promotionSldCounter
   */
  function sldMove() {
    sliderElem.forEach(e => {
      e.style = `transform : translateX(-${sldCounter[0]}px)`
      });
  }
  function cursorSld() {
    curserElem.forEach(e => {
      e.style = `background : none`;
    });
  }
  if(check === "left"){
  if ( sldCounter[0]  >= sliderElem[0].clientWidth*2) {
          sldCounter.fill(0)
          sldMove();
          cursorSld()
          curserElem[sldCounter[1]].style = `background : #fff`;
        }
  else {
    sldCounter[0] += sliderElem[1].clientWidth;
    sldMove();
    cursorSld()
    sldCounter[1]++;
    curserElem[sldCounter[1]].style = `background : #fff`;
  }

  }
  if(check === "right"){
  if (sldCounter[0]  !== 0) {
    sldCounter[0]  -= sliderElem[1].clientWidth;
                    sldMove();
                    cursorSld();
                    sldCounter[1]--;
  curserElem[sldCounter[1]].style = `background : #fff`;
  }
  else {
    sldCounter[0]  = sliderElem[0].clientWidth*2;
  sldMove();
  cursorSld();
  sldCounter[1] = 2;
  curserElem[sldCounter[1]].style = `background : #fff`;
  }


  }

};

promotionSldBtn.forEach((e,i) =>{
    e.addEventListener('click',()=>{
      slider_1(parameter[i],promotionSldBoxes,promotionCurserSld,promotionSldCounter);})
})

// end slider main promotion

// start review slider
let reviewSldBtn = document.querySelectorAll('.reviewBtn'),
    reviewSldBoxes = document.querySelectorAll('#review-comments'),
    reviewCurserSld = document.querySelectorAll('.span-curser-review-slide span '),
    reviewSldCounter = [0,0];
    reviewCurserSld[reviewSldCounter[1]].style = `background : #fff`;


reviewSldBtn.forEach((e,i) =>{
      e.addEventListener('click',()=>{
        slider_1(parameter[i],reviewSldBoxes,reviewCurserSld,reviewSldCounter);})
})



// reset qll slider when refresh page
this.addEventListener('resize',()=>{
  reviewSldCounter = [0,0];
  promotionSldCounter = [0,0];
  for (let i = 0; i < reviewCurserSld.length; i++) {
    promotionCurserSld[i].style = `background : none`;
    reviewCurserSld[i].style = `background : none`;
    reviewSldBoxes[i].style = `transform : translateX(0px)`;
    promotionSldBoxes[i].style = `transform : translateX(0px)`;
  }
  promotionCurserSld[promotionSldCounter[1]].style = `background : #fff`;
  reviewCurserSld[reviewSldCounter[1]].style = `background : #fff`;

})

// menu
let openMenuBtn = document.querySelector('#menuBtn'),
    closeMenuBtn = document.querySelector('#closeMenu'),
    menuNav = document.querySelector('.menu'),
    btnGroupe = [openMenuBtn,closeMenuBtn];

function showMenu() {
  if(menuNav.classList.contains("showMenu")){
    menuNav.classList.remove("showMenu")  }
  else{
    menuNav.classList.add('showMenu')

   }
}

btnGroupe.forEach(element => {
  element.addEventListener('click',showMenu)

});



















/**
 *
function slider_1(check) {
      function sldMove() {
        sliderBoxes.forEach((e,i) => {
          e.style = `transform : translateX(-${slider_1_Counter}px)`
          });

      }
      function cursorSld() {
        curserSlider.forEach(e => {
          e.style = `background : none`;
        });
      }
      if(check === "left"){
      if ( slider_1_Counter  >= sliderBoxes[0].clientWidth*2) {
              slider_1_Counter = 0;
              sldMove();
              cursorSld()
              curserSliderCounter = 0;
              curserSlider[curserSliderCounter].style = `background : #fff`;

            }
      else {
        slider_1_Counter += sliderBoxes[1].clientWidth;
        sldMove();
        cursorSld()
        curserSliderCounter++;
        curserSlider[curserSliderCounter].style = `background : #fff`;


      }

      }
      if(check === "right"){
      if (slider_1_Counter !== 0) {
        slider_1_Counter -= sliderBoxes[1].clientWidth;
                        sldMove();
                        cursorSld();

                        curserSliderCounter--;
      curserSlider[curserSliderCounter].style = `background : #fff`;


      }
      else {
        slider_1_Counter = sliderBoxes[0].clientWidth*2;
      sldMove();
      cursorSld();
      curserSliderCounter = 2;
      curserSlider[curserSliderCounter].style = `background : #fff`;

      }


      }

    };

*
*/
