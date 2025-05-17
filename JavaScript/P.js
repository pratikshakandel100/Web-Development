function save(data){
    return new Promise ((success, failure) => {
    let n = Math.floor(Math.random() * 10) + 1;
    console.log(n)
    if (n < 6){
        success("data is saved");
    } else{
        failure("data isn't saved");
    }
})
}
