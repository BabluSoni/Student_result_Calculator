function calcy() {
    let data_structure = document.getElementById('ds').value;
    let web_design = document.getElementById('wd').value;
    let software_eng = document.getElementById('sw').value;
    let Cpp = document.getElementById('cpp').value;
    let Project = document.getElementById('project').value;
    let grade = "";

    let total = parseFloat(data_structure) + parseFloat(web_design) + parseFloat(software_eng) + parseFloat(Cpp) + parseFloat(Project);
    // alert(total);

    let percent = (total / 500) * 100;
    // alert(percent);

    if (percent <= 100 && percent >= 80) {
        grade = "'A'"
    } else if (percent <= 79 && percent >= 60) {
        grade = "'B'"
    } else if (percent <= 59 && percent >= 40) {
        grade = "'C'"
    } else {
        grade = "'D'"
    }
    // alert(grade)

    if (percent >= 30) {
        document.getElementById('msg').innerHTML = `Your Total Marks is ${total}/500 , percentage is ${percent}% And grade is ${grade} , You are Passed.`
    } else {
        document.getElementById('msg').innerHTML = `Your Total Marks is ${total}/500 , percentage is ${percent}% And grade is ${grade} , You are Fail.`
    }

}