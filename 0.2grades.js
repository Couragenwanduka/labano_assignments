class Students{
  constructor(studentsName,studentsID){
    this.studentsName=studentsName;
    this.studentsID=studentsID;
    this.studentsgrade=[];
    }
  }

class Grades{
  constructor(){
    }
  studentGradeLogic(user, studentsScore){
    if (studentsScore>= 80){
      user.studentsgrade.push(` Scored ${studentsScore} Got an A. execellent work`);
    }else if(studentsScore>= 70){
      user.studentsgrade.push(` Scored ${studentsScore} Got a B`)
    }else if (studentsScore>= 50){
      user.studentsgrade.push(`Scored ${studentsScore} Got a C`)
    }else if (studentsScore> 40){
      user.studentsgrade.push(`Scored ${studentsScore} Got a D`)
    }else if( studentsScore<=40){
      user.studentsgrade.push(`Scored ${studentsScore} Got an F`)
    }
    return;
  }
}

const student1= new Students("Courage Nduka","20");
const student2= new Students("Chidi Oji","30");
const student3= new Students("Ebuka Oji","35");
const student4= new Students("matter ike","40");
const newgrades= new Grades()
newgrades.studentGradeLogic(student1,75);
newgrades.studentGradeLogic(student2,40);
newgrades.studentGradeLogic(student3,80);
newgrades.studentGradeLogic(student4,50)
console.log(student1);
console.log(student2);
console.log(student3);
console.log(student4);
