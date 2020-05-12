(function(){

var make= document.getElementById('select1');
var model =document.getElementById('select2');
var subModel =document.getElementById('select3');
var result= document.getElementById('result');

var createOpts = function(options){
    var dd="";
    for(var option of options){
        dd+= "<option value='"+option+"'>"+ option + "</option>"; 
    }
    return dd;
}

var makeEvtListner = function (){
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
    var dd= createOpts(options);
    model.innerHTML = dd;
}

var modelEvtListner = function(){
    result.innerHTML="";
    var subModels=[];//array variable to hold option list
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
    var dd2= createOpts(subModels);
    
    subModel.innerHTML= dd2;
}

var submodelEvtListner = function(){
    result.innerHTML="";
        var selectedSubModel=subModel.options[subModel.selectedIndex].value;//get selected submodel
        result.innerHTML="You selected" + " "+ make.value.toUpperCase() + " " + model.value + " " +selectedSubModel;
}

make.addEventListener('change',makeEvtListner);
model.addEventListener('change',modelEvtListner);
subModel.addEventListener('change',submodelEvtListner);

})();//iife for page load ends
