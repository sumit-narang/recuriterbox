var zindex = 1;

//get tabs and tabcontent
var tabs = document.getElementsByClassName('tabs');
var tabcontent = document.getElementsByClassName('tab-content');

//default tab styles
tabs[0].className += " active";
tabs[0].style.zIndex = zindex++;
tabcontent[0].className += " active-tab";

//Adding Event Listener to tabs
for(var i = 0; i < tabs.length; i++){
	tabs[i].addEventListener('click',function(event){
		event.preventDefault();
		this.style.zIndex = zindex++;
		var x = this.getAttribute("href").substring(1);
		
		//remove all .active and .active-tab class 
		for (i = 0; i < tabs.length; i++) {
        	tabs[i].classList.remove("active");
        	tabcontent[i].classList.remove("active-tab");
    	}

    	//add .active-tab to tabcontent
		for (j = 0; j < tabcontent.length; j++) {
        	if( (tabcontent[j].classList.contains(x)) )
        		tabcontent[j].className += " active-tab";
    	}

    	//add .active to tabs
    	this.className += " active";
	});
}

//tab links: close button
var close = document.getElementsByClassName('close')[0];
close.addEventListener('click',function(event){
	event.preventDefault();
	//remove all .active and .active-tab class 
	for (i = 0; i < tabs.length; i++) {
       	tabs[i].classList.remove("active");
       	tabcontent[i].classList.remove("active-tab");
    }
});


//tab3: Mail Us
var mail = document.querySelector('.send-mail button');
console.log(mail);
mail.addEventListener('click',function(event){
	event.preventDefault();
	var sent = document.getElementById('mail-sent');
	sent.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i> Message sent! Thanks for reaching out! Someone from our team will get back to you soon.';
	sent.style.padding = "5px";
	sent.style.border = "1px solid #80d480";
})