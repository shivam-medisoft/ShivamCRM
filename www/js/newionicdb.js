var dbI=[];
//localStorage.setItem('DBIonicnew',"");
//try{var dbI=JSON.parse(localStorage.getItem('DBIonic'))}catch(err){};
function addDBIonic(mrno,fnm){
    var chk = '{"mrno":"'+mrno+'"},{"name":"'+fnm+'"}';
    var dbIn = [];
    confirm(localStorage.getItem('DBIonicnew'));
    try{
        if(localStorage.getItem('DBIonicnew') != null){
        dbIn = JSON.parse(localStorage.getItem('DBIonicnew'));
    for(var k=0;k<dbIn.length;k++){
        confirm(dbIn[k].toString());
        var mrn = dbIn[k]["mrno"];
        confirm(mrn+"--"+mrno);
        if(mrn == mrno){
            return false;
        }
    }
        }
    }catch(err){confirm(err)}
    dbIn.push({
        "mrno" : mrno,
        "name"  : fnm
    });
    //confirm(localStorage.DBIonic);
    localStorage.setItem('DBIonicnew',JSON.stringify(dbIn))
    confirm(localStorage.getItem('DBIonicnew'));
   // confirm(dbI+"--"+dbI.length);
   
}
function deleteDBIonic(mrno){
   
    var dbIn = [];
    //confirm(localStorage.getItem('DBIonicnew'));
    try{
        if(localStorage.getItem('DBIonicnew') != null){
        dbIn = JSON.parse(localStorage.getItem('DBIonicnew'));
    for(var k=0;k<dbIn.length;k++){
        confirm(dbIn[k].toString());
        var mrn = dbIn[k]["mrno"];
       
        if(mrn == mrno){
           delete dbIn[(k)];
confirm(mrn+"--"+mrno);
localStorage.setItem('DBIonicnew',JSON.stringify(dbIn).replace("[null]","").replace("null,","").replace(",null",""));
    confirm(localStorage.getItem('DBIonicnew'));
            return false;
        }
    }
        }
    }catch(err){confirm(err)}
//    dbIn.push({
//        "mrno" : mrno,
//        "name"  : fnm
//    });
    //confirm(localStorage.DBIonic);
    //localStorage.setItem('DBIonicnew',JSON.stringify(dbIn))
    confirm(localStorage.getItem('DBIonicnew'));
   // confirm(dbI+"--"+dbI.length);
   
}
