$("document").ready(() => {






    const loginElements = Array.from($(".modal-body")[0].children[0].children[0].children[1].children);
    const captcha = $(".modal-body")[0].children[0].children[0].children[1].children[3];
    const change = loginElements[7].children[1].children[0];


    const rental_container = $(".aboutus")[0].children[1];
    const ticket_container = $(".aboutus")[0].children[2];
    const btn_rental = $(".aboutus")[0].children[0].children[0].children[0].children[1].children[0].children[0];
    const btn_train = $(".aboutus")[0].children[0].children[0].children[0].children[1].children[1].children[0];
    const faq_tabs = Array.from($(".faq_tabs")[0].children);
    let line = $(".line")[0];
    const faq_contents = Array.from($(".faq_content"));
    console.log(faq_contents);
 
    
 


    const loginformElements = loginElements.slice(2, 5);
    const otpenterElements = loginElements.slice(5, 9);
    otpenterElements.forEach((element) => $(element).hide());


    $("#capcha").hide();
    $(ticket_container).hide();
    $("#genotp").attr("disabled", true);
    $("#check").click(() => $("#genotp").attr("disabled", false));
    $(change).click(()=>toggle());



    $(window).resize(() => {

        if ($(window).width() < 676) {
            $($("main")[0].children[2]).removeClass("h-50");
        }
        else {
            $($("main")[0].children[2]).addClass("h-50");
        }

    })


    $("#mob").keydown(() => {

        if ($("#mob").val().length < 7 || $("#mob").val().length > 9) {
            $("#formvalid").html("Please enter valid Number");
            $("#capcha").hide();
        }
        else {
            $("#formvalid").html("");
            $("#capcha").show();

        }
    })



    


    function toggle() {

        loginformElements.forEach((element)=>$(element).toggle());
        otpenterElements.forEach((element) => $(element).toggle());
    }

    $("#genotp").click(() => {

        const mobNumber = loginElements[7].children[0].children[0];
        toggle();
        $(mobNumber).text($("#mob").val());

    })



    $(btn_rental).click(() => {


        $(ticket_container).hide()
        $(rental_container).show();

        $(btn_rental).removeClass("bg-light");
        $(btn_rental).addClass("bg-danger");

        $(btn_train).removeClass("bg-danger");
        $(btn_train).addClass("bg-light");





    })

    $(btn_train).click(() => {


        $(ticket_container).show()
        $(rental_container).hide();

        $(btn_train).removeClass("bg-light");
        $(btn_train).addClass("bg-danger");

        $(btn_rental).removeClass("bg-danger");
        $(btn_rental).addClass("bg-light");


    })


     faq_tabs.forEach((tab,index)=>{

        $(tab).click((e)=>{

            faq_tabs.forEach((tab)=>tab.classList.remove("text-danger"));
            
            e.target.classList.add("text-danger")

           $(line).css("width",(e.target.offsetWidth+"px"));
           $(line).css("left",(e.target.offsetLeft+"px"));

           faq_contents.forEach((element)=>element.classList.remove("active"));
           faq_contents[index].classList.add("active");
    });
     })

    

})