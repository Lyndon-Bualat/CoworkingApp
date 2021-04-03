var userInfo = []; 
var userProperty = [];
var workSpaces = [];
var ownerInfo = [];



function ShowOwner(){ //page 2

    var sessionString = sessionStorage.getItem('userArray');
    var pageArray = JSON.parse(sessionString);

    let ownerDetails = {
        User: pageArray[0].Name,
        Phone: pageArray[0].Phone,
        Email: pageArray[0].Email,
    } 

    ownerInfo.push(ownerDetails);
    // console.log(indexArray);

    console.log(pageArray);
    if(pageArray[0].Role === "Owner"){
    $("#userName").append("Welcome " + pageArray[0].Role +" "+pageArray[0].Name);
    }
}

function ShowRent(){
    var sessionString1 = sessionStorage.getItem('userArray');
    var pageArray1 = JSON.parse(sessionString1);

    console.log(pageArray1);
    if(pageArray1[0].Role === "Coworker"){
    $("#userName").append("Welcome " + pageArray1[0].Role +" "+ pageArray1[0].Name);
    }
}



function SaveProperty(){
    sessionStorage.setItem('userProperties',JSON.stringify(workSpaces));
    window.open("index.html");
}


function SubmitInfo(){ 

    var name =  $("#name").val();
    var phone =  $("#phone").val();
    var email =  $("#email").val();
    var role = $("input[type='radio'][name='role']:checked").val();
    var sessionString2 = sessionStorage.getItem('userProperties');
    var rentedArray = JSON.parse(sessionString2);
       
    if( name === "" ||  phone === "" || email === ""){
    alert("Please enter information");
    clearInfo();
    return null;
    }   
      
    clearInfo();


    let userDetails = { 
    Name: name,
    Phone: phone,
    Email: email,
    Role: role,
    };


    userInfo.push(userDetails);
    console.log(userInfo);
    
    sessionStorage.setItem('userArray',JSON.stringify(userInfo));
    sessionStorage.setItem('userProperties',JSON.stringify(rentedArray));

    if(role == "Owner"){    
        window.open("index1.html");
    }
     if(role == "Coworker"){     
        window.open("index2.html");
    }

    location.reload();
}

function SearchWorkspace(){
    var sessionString2 = sessionStorage.getItem('userProperties');
    var rentedArray = JSON.parse(sessionString2);
    var userSearch = $("#searchBar").val();
    // $("#workList").empty();
    for(var i = 0; i < rentedArray.length; i++){
        if( userSearch ==  rentedArray[i].Property || 
            userSearch ==  rentedArray[i].Address || 
            userSearch ==  rentedArray[i].Neighbor || 
            userSearch ==  rentedArray[i].Square || 
            userSearch ==  rentedArray[i].Garage || 
            userSearch ==  rentedArray[i].Transport || 
            userSearch ==  rentedArray[i].Workspace || 
            userSearch ==  rentedArray[i].Seats || 
            userSearch ==  rentedArray[i].Available || 
            userSearch ==  rentedArray[i].Lease || 
            userSearch ==  rentedArray[i].Price ){
            $("#workList").append(
            "<br>"+ "Contact Info: " +"<br>"+
            "Owner: "  + rentedArray[i].Owner +"<br>"+
            "Phone: "  + rentedArray[i].Phone +"<br>"+
            "Email: "  + rentedArray[i].Email +"<br>"+
            "<br>"+          
            "Property: " + rentedArray[i].Property +"<br>"+
            "Address: " + rentedArray[i].Address +"<br>"+
            "Neighborhood: " + rentedArray[i].Neighbor +"<br>"+
            "Square Feet: " + rentedArray[i].Square +"<br>"+
            "Garage: " + rentedArray[i].Garage +"<br>"+
            "Public Transportation: " + rentedArray[i].Transport+"<br>" +
            "Workspace: " + rentedArray[i].Workspace +"<br>"+
            "Number of Seats: " + rentedArray[i].Seats+"<br>"+
            "Smoking Allowed: " +rentedArray[i].Smoking+"<br>"+
            "Available Date: " + rentedArray[i].Available+"<br>"+
            "Term Lease: " + rentedArray[i].Lease +"<br>"+
            "Price: " + rentedArray[i].Price+"$"+"<br>"+
            "<hr>"
            );
        }        
    }
    
    console.log(rentedArray);
}

function SubmitProperty(){

    var property = parseInt($("#pNumber").val())
    var address = $("#pAddress").val()
    var neighbor =  $("#pNeighbor").val()
    var square = $("#pSquare").val()
    var garage = $("input[type='radio'][name='garage']:checked").val()
    var transport = $("input[type='radio'][name='transport']:checked").val()


    for(var i = 0; i < userProperty.length; i++){
        if(property == userProperty[i].Property){
            alert("Property Already Exist");
            clearProperty()
            return null;
        }
    }

        if(address == "" || neighbor == "" || square == ""){
        alert("Please enter information");
        clearProperty()
        return null;
        }
        else if(address != "" || neighbor != "" || square != "") {
            alert("Property Added"); 
        }
  

    clearProperty()

    let propertyDetail = {
        Property: property,
        Address: address,
        Neighbor: neighbor,
        Square: square,
        Garage: garage, 
        Transport:transport,
    };

 

    userProperty.push(propertyDetail);
    $("#propertyDisplay").empty()
    ShowProperty();
    console.log(userProperty);
}


function ShowProperty(){
        for(var i = 0; i < userProperty.length; i++){
        $("#propertyDisplay").append(
        "<br>"+ "Property: " + userProperty[i].Property+"<br>"+
        "Address: " + userProperty[i].Address +"<br>"+
        "Neighborhood: " + userProperty[i].Neighbor +"<br>"+
        "Square Feet: " + userProperty[i].Square +"<br>"+
        "Garage: " + userProperty[i].Garage +"<br>"+
        "Public Transportation " + userProperty[i].Transport+"<br>" + 
        "<hr>"
        );
    }
  
}

function addWorkspace(){ 

    var pNum = parseInt($("#wSpace").val());
    var tWork = $("#wWork").val();
    var tSeat= $("#wSeat").val();
    var tSmoke =  $("input[type='radio'][name='smoke']:checked").val();
    var tDate = $("#wDate").val();
    var tTerm = $("#wTerm").val();
    var tPrice = $("#wPrice").val();



    for(var i = 0; i < userProperty.length; i++){
        if(pNum == userProperty[i].Property){
            alert("Property Rented");
        }
    }  

    
        if(pNum  === "" ||  tWork  === "" || tSeat === ""){
            alert("Enter Info");
            clearWorkspace();
            return null;   
        }


    for(var i = 0; i < userProperty.length; i++){
        if(pNum == userProperty[i].Property){
            let spaceDetails = {
            Property:  pNum,   
            Address: (userProperty[i].Address),
            Neighbor: (userProperty[i].Neighbor),
            Square: (userProperty[i].Square),
            Garage: (userProperty[i].Garage), 
            Transport:(userProperty[i].Transport),
            Workspace: tWork,
            Seats: tSeat,
            Smoking: tSmoke,
            Available: tDate,
            Lease: tTerm,
            Price: tPrice,
            Owner: ownerInfo[0].User,
            Email: ownerInfo[0].Email,
            Phone: ownerInfo[0].Phone,
            }
            workSpaces.push(spaceDetails);            
        } 
    }

    clearWorkspace();
    $("#workDisplay").empty();
    ShowWorkspace();
    console.log(workSpaces);
}

function ShowWorkspace(){

        for(var i = 0; i < workSpaces.length; i++){
        $("#workDisplay").append(
        "<br>"+ "Property: " + workSpaces[i].Property +"<br>"+
        "Address: " + workSpaces[i].Address +"<br>"+
        "Neighborhood: " + workSpaces[i].Neighbor +"<br>"+
        "Square Feet: " + workSpaces[i].Square +"<br>"+
        "Garage: " + workSpaces[i].Garage +"<br>"+
        "Public Transportation " + workSpaces[i].Transport+"<br>" +
        "Workspace: " + workSpaces[i].Workspace +"<br>"+
        "Number of Seats: " + workSpaces[i].Seats+"<br>"+
        "Smoking Allowed: " + workSpaces[i].Smoking+"<br>"+
        "Available Date: " + workSpaces[i].Available+"<br>"+
        "Term Lease: " + workSpaces[i].Lease +"<br>"+
        "Price: " + workSpaces[i].Price+"$"+"<br>"+
        "<hr>"
        );
    }
  
}

function RemoveProperty(){

    var removeProp = parseInt($("#pRemove1").val());
    for(var i = 0; i < userProperty.length; i++){
        if(userProperty[i].Property == removeProp){
          userProperty.splice(i, 1); 
          workSpaces.splice(i,1);        
        }
    }
    alert("Property " + removeProp + " removed!");
    $("#propertyDisplay").empty()
    $("#workDisplay").empty();
    ShowProperty();
    ShowWorkspace();
    $("#pRemove1").val('');
    console.log(userProperty);  
}   

function RemoveSpace(){
    $("#workDisplay").empty();
    var removeWork = parseInt($("#pRemove2").val());
    for(var i = 0; i < workSpaces.length; i++){
        if(workSpaces[i].Property == removeWork){
          workSpaces.splice(i,1);        
        }
    }
    alert("Workspace " + removeWork + " removed!");
    $("#workDisplay").empty();
    ShowWorkspace();
    $("#pRemove2").val('');
    console.log(workSpaces);  

}



function clearWorkspace(){
    $("#wSpace").val('');
    $("#wWork").val('');
    $("#wSeat").val('');
    $("#wDate").val('');
    $("#wTerm").val('');
    $("#wPrice").val('');
    $("#wYes").prop('checked', false);
    $("#wNo").prop('checked', false);
}

function clearProperty(){
    $("#pNumber").val('')
    $("#pAddress").val('')
    $("#pNeighbor").val('')
    $("#pSquare").val('')
    $("#yesG").prop('checked', false);
    $("#noG").prop('checked', false);
    $("#yesT").prop('checked', false);
    $("#noT").prop('checked', false);
}

function clearInfo(){   
    $("#name").val('');
    $("#phone").val('');
    $("#email").val('');
    $("#coworker").prop('checked', false);
    $("#owner").prop('checked', false);
}


