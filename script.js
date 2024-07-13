//your JS code here. If required.
 let previousbut = document.querySelector("#prev");
        let nextbut = document.querySelector("#next");
        let circle= document.querySelector(".circle");
         let activeCircle=1;
        document.querySelector("#circle-1").classList.add("active");
         document.querySelector("#line-1").classList.add("active");
        nextbut.addEventListener("click" ,() => {
			document.querySelector(`#circle-${activeCircle}`).classList.remove("active");
			document.querySelector(`#line-${activeCircle}`).classList.remove("active");
			activeCircle++;
			document.querySelector(`#circle-${activeCircle}`).classList.add("active");
			document.querySelector(`#line-${activeCircle}`).classList.add("active");
			
			
			
        })