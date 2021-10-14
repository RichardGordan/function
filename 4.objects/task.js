
function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    

}

Student.prototype.setSubject = function (subjectName) {
   this.subject = subjectName;
}
Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
    this.marks = [mark];
    } else {
      this.marks.push(mark);
    }
  

}
Student.prototype.addMarks = function(...marks){
  if(this.marks === undefined){
    this.marks = [...marks];
}else{
  this.marks.push(...marks);
}
  

}

Student.prototype.getAverage = function(){
  let sum = 0;
   this.marks.foreach((mark) => {sum += parsenInt(mark)})
   return sum / this.marks.length


}
Student.prototype.exclude = function(reason){
  delete this.subject;
  delete this.marks;
   this.exluded = reason;
}
let student1 = new Student;
let studen2 = new Student;
