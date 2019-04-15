
$(document).ready(function(){


    let language = $(".language-section").hide();

    $(".language").click(function(){
        language.toggle();
        let color = $(".language").css("background-color")
        if(color == "black"){
            $(".language").css("background-color", "");
        }

        else{
            $(".language").css("background-color", "black");
        }
        // for(let i=0; i<language.length; i++){
        //     let val = language.text();
        //     console.log(language)
        //     $("#activ-val").text(val[i]);
        // }
    })
});