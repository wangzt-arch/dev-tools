 //禁止双击放大
 document.documentElement.addEventListener('ondblclick', function (event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, false);
//禁止手指放大
document.documentElement.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, {
    passive: false
})