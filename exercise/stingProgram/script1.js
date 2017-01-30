function Students (name , dob , phoneNumber , grades){
    this.name = name,
  this.dob = age,
  this.phoneNumber = phoneNumber,
  this.grades = grades,
  this.result= '';
    this.age = function(){
        return 2017 - dob;
        
        
        
    }

}


var s1 = ('mostafo' , 20 , 71010101 , [0,0,0,0,0,0]);
var s2 = ('mostafo2' , 21 , 71010101 , [0,0,0,0,0,0]);
var s3 = ('mostafo3' , 22 , 71010101 , [0,0,0,0,0,0]);

var students = [s1,s2,s3];

function studentPass(student){
    var sum=0;
    var avg = 0;
    for (var i=0 ; i<student.grades.length; i++){
        sum=sum+student.grades[i];
    }
    avg=sum/student.grades.length;
    if(avg>60){
      student.result="pass";
    }else {
      student.result="fail";
    }
    student.avg=avg;
    student.sum = sum;
}

function sortAvg(a, b)
{
    return a.avg - b.avg;
}

function sortSum(a, b)
{
    return a.sum - b.sum;
}


for(var i=0;i<students.length;i++){
    studentPass(students[i]);
}


students.sort(sortAvg);
console.log('sorting according to avarage of grades : \n');
for(var i=0 ; i<students.length ; i++){
    console.log(students[i].name + '\t' + students[i].avg);
    
}
console.log('\n******************************************************\n');
console.log('sorting according to summation of grades : \n');

for(var i=0 ; i<students.length ; i++){
    console.log(students[i].name + '\t' + students[i].sum);
    
}

