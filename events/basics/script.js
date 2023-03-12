const method2Btn = document.querySelector('#method2');
method2Btn.onclick = () => alert("This button function was create using on[eventType] function in the JS file");

const method3 = document.querySelector('#method3');
method3.addEventListener('click', () => {alert("This button function uses an addEventListerner function")});