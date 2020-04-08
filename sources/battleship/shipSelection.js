document.getElementById("carrier").addEventListener("click", function() {
    //let imgCarrier = this.removeChild(document.getElementById("imgCarrier"));
    //document.body.appendChild(imgCarrier);
    let imgCarrier = document.getElementById("imgCarrier");

    function imageToCursor(e) {
        imgCarrier.style.position = "absolute";
        imgCarrier.style.left = e.clientX + 1 + 'px';
        imgCarrier.style.top = e.clientY + 1 + 'px';
    };
    document.addEventListener("mousemove", imageToCursor);

    document.getElementById("board").addEventListener("click", function(e) {
        e.target.appendChild(imgCarrier);
        imgCarrier.style.position = "absolute";
        imgCarrier.style.left = "inherit";
        imgCarrier.style.top = "inherit";
        imgCarrier.style.marginLeft = "-25px";
        imgCarrier.style.marginTop = "-27px";
        imgCarrier.style.width = "266px"
        e.target.style.width="50px";
        document.removeEventListener("mousemove", imageToCursor);
    });
    
    document.addEventListener("keydown", function(e) {
        if (e.keyCode === 82) {
          imgCarrier.style ='transform:rotate(90deg)';
        }
    });

});

