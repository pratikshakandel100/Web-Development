function CheckPercentageAndGrade(){
    // event.preventDefault();
    const Math = document.getElementById("Math").value;
    const Science = document.getElementById("Science").value;
    const Social = document.getElementById("Social").value;
    const English = document.getElementById("English").value;
    const Nepali = document.getElementById("Nepali".value);
    
    const output = `
            ma = ${Math},
            sc = ${Science},
            so = ${Social},
            en = ${English},
            ne = ${Nepali}`
    document.getElementById("output").innerHTML = output;
    
}