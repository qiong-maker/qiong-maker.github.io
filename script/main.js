let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === '../images/07.jpg') {
      myImage.setAttribute('src', '../images/02.jpg');
    } else {
      myImage.setAttribute('src', '../images/03.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
  }
  localStorage.setItem('name', myName);
  myHeading.textContent = 'MOZLLIA 老帅了' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'MOZLLIA 老帅了' + storedName;
}
myButton.onclick = function() {
   setUserName();
}