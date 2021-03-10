// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

function isAdmin(userObj) {
    if (userObj.userRole === 'ADMIN') { return true }
    return false
}

function getEmail(userObj) {
    return (userObj.firstName).toLowerCase() + '.' + (userObj.lastName).toLowerCase() + "@codeimmersives.com"

}

function getPlaylistLength(playObj){
    return playObj.songs.length
    
}

function getHardestHomework(arrObj){
    if (arrObj.length === 0) {return ""}
      
    let hardestHW = arrObj[0].name
    let minScore = arrObj[0].averageScore
    
    
    for (const eachObj of arrObj){
        if (eachObj.averageScore < minScore){  
            minScore =  eachObj.averageScore 
            hardestHW =  eachObj.name   
        }
    }
    return hardestHW
}


function createPhonebook(names , numbers){
   

    const obj = {

    };

    for (let i = 0 ; i < names.length ; i++  ){

        obj[names[i]] = numbers[i]

    }
        
        return obj

}



// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};