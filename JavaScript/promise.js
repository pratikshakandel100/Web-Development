function saveToDb(data, success, failure){
   let result = Math.floor(Math.random() * 10) + 1
   console.log(result)
   if (result <= 5){
    success();
   } else{
    failure();
   }
}

saveToDb("Happy Code", ()=> {
    console.log("Your data is saved");
    saveToDb("Seconddata", ()=>{
        console.log("You second data is saved.");
        saveToDb("ThirdData", ()=>{
        console.log("Thrd data is saved")
    }, ()=>{
        console.log("Third data isnot saved")
    })
    }, () => {
        console.log("Your second data isn't saved.")
    })
    
}, ()=>{
    console.log("Your data isn't saved");
})