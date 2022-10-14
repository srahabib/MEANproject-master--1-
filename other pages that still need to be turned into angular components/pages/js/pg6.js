const showContainers = document.querySelectorAll(".show-replies");

showContainers.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    let parentContainer = e.target.closest(".comment__container");
    let _id = parentContainer.id;
    if (_id) {
      let childrenContainer = parentContainer.querySelectorAll(
        `[dataset=${_id}]`
      );
      childrenContainer.forEach((child) => child.classList.toggle("opened"));
    }
  })
);


/*love button*/
const button = document.querySelector(".heart-like-button");

button.addEventListener("click", () => {
  if (button.classList.contains("liked")) {
    button.classList.remove("liked");
  } else {
    button.classList.add("liked");
  }
});


/* Showing add reply section*/
 const replybtn = document.getElementById("reply-btn");

 const replybox = document.getElementById('reply-box');

 replybtn.addEventListener('click', function showReplyBox() {

     if (replybox.style.display === "none") {
         replybox.style.display = "block";
       } else {
         replybox.style.display = "none";
       }

   });


/** toggle but code applyed to the first element only **/

/*
like and unlike button colors 
   var btn1 = document.querySelector('#green');
   var btn2 = document.querySelector('#red');


  btn1.addEventListener('click', function() {

      if (btn2.classList.contains('red')) {
        btn2.classList.remove('red');
      } 
    this.classList.toggle('green');

  });

  btn2.addEventListener('click', function() {

      if (btn1.classList.contains('green')) {
        btn1.classList.remove('green');
      } 
    this.classList.toggle('red');
  });
*/

//const btn2 = document.querySelectorAll(`[id^="reply-btn"]`);
//const btn1 = document.querySelectorAll(`[id^="reply-box"]`);




/*** */

var btn1 = document.querySelectorAll('#green');
var btn2 = document.querySelectorAll('#red');


 btn1.forEach((likebtn) =>

  likebtn.addEventListener('click', function() {
  
      if (likebtn.classList.contains('red')) {
        likebtn.classList.remove('red');
    }
    this.classList.toggle('green');
  
  })
  );

  btn2.forEach((likebtn) =>

  likebtn.addEventListener('click', function() {
  
      if (likebtn.classList.contains('green')) {
        likebtn.classList.remove('green');
    } 
    this.classList.toggle('red');
  
  })
  );














