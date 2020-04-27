(function(){

var make= document.getElementById('select1');
var model =document.getElementById('select2');
var subModel =document.getElementById('select3');
var result= document.getElementById('result');

make.addEventListener('change',function(){
    result.innerHTML="";
    var options="";//array variable to hold option list
    if (make.value == "honda"){
        options=["--","Civic","Accord","CRV"];
    }else if(make.value == "bmw"){
        options=["--","X3","X4","X6"];
    }else if(make.value == "audi"){
        options=["--","Q5","Q7","Q8"];
    }else{
        options=[];
    }
    var dd="";
    for(var option of options){
        dd+= "<option value='"+option+"'>"+ option + "</option>"; 
    }
    model.innerHTML=dd;//generate options list
    var selectedMake = make.options[make.selectedIndex].value;//get selected make
    model.addEventListener('change',function(){
        result.innerHTML="";
        // console.log(model.value);
        var subModels="";//array variable to hold option list
        if(model.value == "Civic"){
            subModels=["--","EX","LX","Sport","EX-L","Touring"];
        }else if(model.value == "Accord"){
            subModels=["--","EX","LX","Sport","EX-L","Touring","Hybrid"];
        }else if(model.value == "CRV"){
            subModels=["--","EX","LX","Sport","EX-L","Touring"];
        }else if(model.value == "X3"){
            subModels=["--","sDrive30i","xDrive30i","M40i"];
        }else if(model.value == "X4"){
            subModels=["--","sDrive30i","xDrive30i","M40i"];
        }else if(model.value == "X6"){
            subModels=["--","xDrive40i","M50i"];
        }else if(model.value == "Q5"){
            subModels=["--","Komfort S tronic","Progressiv S tronic","Technik S tronic"];
        }else if(model.value == "Q7"){
            subModels=["--","Komfort","Progressiv","Technik"];
        }else if(model.value == "Q8"){
            subModels=["--","Progressiv","Technik"];
        }
        var dd2="";
        for (var a of subModels){
            dd2+= "<option value='"+a+"'>"+ a + "</option>";
        }
        subModel.innerHTML= dd2;//generate options list
        
    var selectedModel=model.options[model.selectedIndex].value;//get selected model
    
    subModel.addEventListener('change',function(){
        result.innerHTML="";
        var selectedSubModel=subModel.options[subModel.selectedIndex].value;//get selected submodel
        result.innerHTML="You selected" + " "+ selectedMake.toUpperCase() + " " + selectedModel + " " +selectedSubModel;
    });//end of submodel change event listener
    
    });//end of model change event listener
    

});//end of make change event listenere

})();//iife for page load ends