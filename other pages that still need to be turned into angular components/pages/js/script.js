/*previous and Next buttons*/ 
var button = document.getElementById('slide');
button.onclick = function () {
    var container = document.getElementById('row');
    sideScroll(container,'right',25,100,300);
};

var back = document.getElementById('slideBack');
back.onclick = function () {
    var container = document.getElementById('row');
    sideScroll(container,'left',25,100,300);
};

function sideScroll(element,direction,speed,distance,step){
    scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}


/*button appears and disappears on clicking the input field*/

//field 1 vars
const input = document.getElementById('input');
const btn = document.getElementById('cancel');
//field 2 vars
const input2 = document.getElementById('input2');
const CancelMealCategory = document.getElementById('cancel-meal-category');
//field 3 vars
const textarea = document.getElementById('description');
const cancelTeaxtAreaBtn = document.getElementById('cancel-description');

input.addEventListener('click', function showhide() {
    btn.style.display = "inline-block";
    CancelMealCategory.style.display ='none';
    cancelTeaxtAreaBtn.style.display ='none';
  });

textarea.addEventListener('click', function showtext() {
    btn.style.display = "none";
    CancelMealCategory.style.display ='none';
    cancelTeaxtAreaBtn.style.display ='inline-block';
  });

input2.addEventListener('click', function showtext() {
    btn.style.display = "none";
    CancelMealCategory.style.display ='inline-block';
    cancelTeaxtAreaBtn.style.display ='none';
  });

  



/*Clear input field on clicking 'X' icon*/
input.value = '';
btn.addEventListener('click', function handleClick() {
  input.value = '';
});

input2.value = '';
CancelMealCategory.addEventListener('click', function handleClick() {
    input2.value = '';
});

textarea.value = '';
cancelTeaxtAreaBtn.addEventListener('click', function handleClick() {
    textarea.value = '';
});


/*COUNT NUMBER OF IMAGES*/
var container_div = document.getElementById('row');
var count = container_div.getElementsByTagName('img').length;
document.getElementById("picture-count").innerHTML = count +" images had been successfully uploaded";
//console.log(count)

/*number of uploaded photos text message fading effect */


window.onload = function() {
    window.setTimeout(fadeout, 3000); //8 seconds
  }
  
  function fadeout() {
    document.getElementById('picture-count').style.opacity = '0';
  }



  /*xx left characters in textarea */
  document.getElementById('description').onkeyup = function () {
    document.getElementById('left-letters').innerHTML =  (10 - this.value.length) +" Letter Left ";

  };




