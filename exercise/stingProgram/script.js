var students=[ 
    {name:"Mostafa", grade:40},
    {name:"Nour", grade:100},
    {name:"Mohammad", grade:88},
    {name:"Zakaria", grade:75},
    {name:"Sara", grade:95}
    ];
var pass =[];
var fail=[];

for(var i=0; i<students.length; i++){
    if (students[i].grade < 60) {
        students[i].statusGrade="fail";
        fail.push(students[i])
    }else {
        pass.push(students[i])
    }
}
 print(fail);
for(var j=0; j<pass.length; j++){
    if (pass[j].grade >=60 && pass[j].grade <70) {
        pass[j].statusGrade="pass";
    }else if (pass[j].grade >=70 && pass[j].grade <80) {
        pass[j].statusGrade="good";
    }else if (pass[j].grade >=80 && pass[j].grade <90) {
        pass[j].statusGrade="very good";
    }else if (pass[j].grade >=90 && pass[j].grade <=100) {
        pass[j].statusGrade="exe";
    }
}


function print(arr){
    for(var j=0; j<arr.length; j++)
        console.log(arr[j].name+" "+arr[j].grade+" "+arr[j].statusGrade);
}
print(pass);