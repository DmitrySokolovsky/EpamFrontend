var renderer = new Renderer();
var currentYear = 2017;
var currentMonth = 10;
var datePick = new Calendar(currentYear, currentMonth);



var prevMonth = function () {
    var dateP = document.getElementsByClassName("datepicker")[0];
    var date = new Date(currentYear,currentMonth-2);
    currentMonth-=1;
	if(currentMonth==0){
        currentMonth=12;
        currentYear-=1;
    }
    
    dateP.parentNode.removeChild(dateP);  
    
    element = renderer.createTemplate(
        {
            tag: "div",
            class: "datepicker",
            child: renderer.contents({tag :"div",class: "days"},datePick.getContent(currentYear,currentMonth-1),datePick.selected(),"green")           
        }
    );
    renderer.render(element,"datepicker");
    var month = document.getElementsByClassName("month__title")[0];
    month.innerHTML = date.toLocaleString('en-US',{month: 'long'});
}

var nextMonth = function () {
    var dateP = document.getElementsByClassName("datepicker")[0];
    var date = new Date(currentYear,currentMonth);
    currentMonth+=1;
	if(currentMonth==13){
        currentMonth=1;
        currentYear+=1;
    }
        
    dateP.parentNode.removeChild(dateP);  
    
    element = renderer.createTemplate(
        {
            tag: "div",
            class: "datepicker",
            child: renderer.contents({tag :"div",class: "days"},datePick.getContent(currentYear,currentMonth-1),datePick.selected(),"green")           
        }
    );
    renderer.render(element,"datepicker");
    var month = document.getElementsByClassName("month__title")[0];
    month.innerHTML = date.toLocaleString('en-US',{month: 'long'});
}

var element_1 = renderer.createTemplate({
    tag: "div",
    class: "date",
    child: [      
        {               
            tag: "div",
            class: "month",
            child: [
                {
                    tag: "button",
                    content: "PREV",
                    class: "btn",
                    handler: {
                        type: "click",
                        func: prevMonth
                    }                    
                },
                {
                    tag: "div",
                    class: "month__title",
                    content: datePick.monthString
                },
                {
                    tag: "button",
                    content: "NEXT",
                    class: "btn" ,
                    handler: {
                        type: "click",
                        func: nextMonth
                    }                   
                }
            ]
        },
        {
            tag: "div",
            class: "datepicker",
            child: renderer.contents({tag :"div",class: "days"},datePick.getContent(currentYear,currentMonth-1),datePick.selected(),"green")           
        }
    ]
});

renderer.render(element_1,"datepicker");

console.log(element_1);