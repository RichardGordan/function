function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;

}

Student.prototype.setSubject = function (subjectName) {
  return subjectName
}
Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
    this.marks = [mark];
    } else {
      this.marks.push(mark);
    }
  

}
Student.prototype.addMarks = function(...marks){
  this.marks = [...rest];

}

Student.prototype.getAverage = function(){
  let sum = 0;
   this.marks.foreach((mark) => {sum += parsenInt(mark)})
   return sum / this.marks.length


}
Student.prototype.exclude = function(reason){
  delete this.setSubject;
  delete this.marks;
  return this.reason
}
let student1 = new Student;
let studen2 = new Student;
// ваш код для остальных методов