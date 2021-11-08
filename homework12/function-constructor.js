(() => {
    function Student(name, faculty, marks){
        let generateStudent = studentsMock.getStudent()
        this.name = generateStudent.name;
        this.faculty = generateStudent.specialty;
        this.marks = generateStudent.marks;

        this.getAvgMark = () => {
            return this.marks.reduce((a,b) => {
                return result = (a + b)/this.marks.length;
            }) 
        }

        this.getMaxMark = () => {
            return Math.max(...this.marks);
        }
        this.getMinMark = () => {
            return Math.min(...this.marks);
        }
        this.getSumMark = () => {
            return this.marks.reduce((a,b) => {
                return result = (a + b);
            }) 
        }
        this.getInfo = () => {
            return `
                Students name: ${this.name}
                Faculty: ${this.faculty}
                Marks: ${this.marks}
                Average mark: ${this.getAvgMark()}
                Max mark: ${this.getMaxMark()}
                Min mark: ${this.getMinMark()}
                Sum mark: ${this.getSumMark()}
            `
            
        }

    }

    const student = new Student();
    console.log(student)
    console.log(student.getInfo());
})();