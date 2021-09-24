const students = studentsMock.getStudentList(10);

const studentsSummaryMark = function() {
    return students.map((item) => {
        item.averageMark = avarageMark(item.marks);
        item.meddiana = middleValue(item.marks);
        return item
    })
    
}

const avarageMark = marks => {
    return marks.reduce((a,b) => {
        result = (a + b)/marks.length;
        return result
    }) 
}

const middleValue = marks => {
    let med;
    let mid = 0;
    for(let i = 0; i < marks.length; i++){
        let iter = 0;
        for(let j = 0; j < marks.length; j++){
            if(marks[j] === marks[i]){
                iter++
                if(iter > mid){
                    mid = iter;
                    med = marks[i]
                }
            }
        }
    }
    return med
}
const listBadStudent = function(studentArr) {
    const badStudent = studentArr.filter((i) => i.averageMark < 5)
    console.log('Bad student: ', badStudent)
}

const addNewStudent = function() {
    const newStudent = studentsMock.getStudentList(1)[0];
    newStudent.averageMark = avarageMark(newStudent.marks)
    students.push(newStudent)   
    console.log('New student:', students)
}

const sortedMark = (students) => {
    const mapped =  students.map((el) => {
        return { name: el.name, averageMark: el.averageMark};

    });
    mapped.sort(function(a, b) {
        if (a.averageMark > b.averageMark) {
        return -1; }
        else {
        return 1; }
    });
        console.log('Sort:', mapped)


    // sort = students.sort(function (a, b){ 
    //     if (a.averageMark > b.averageMark){
    //         return -1
    //     }else{
    //         return 1;
    //     }
    // })
}

// console.log(studentsSummaryMark())
// b.filter((i) => i.averageMark < 5)
listBadStudent(studentsSummaryMark());
addNewStudent();
sortedMark(students);
