function GPA_MARK(mark) {
    if ((mark > 0 && mark <= 100) && typeof mark == "number") {
        if (mark >= 80) {
            console.log("You got A+")
        }
        else if (mark >= 70) {
            console.log("You got A")
        }
        else if (mark >= 60) {
            console.log("You got A-")
        }
        else if (mark >= 50) {
            console.log("You got B")
        }
        else if (mark >= 40) {
            console.log("You got C")
        }
        else if (mark >= 33) {
            console.log("You got D")
        }
        else if (mark >= 0) {
            console.log("You got F")
        }
    }
    else {
        console.log('invalid marks')
    }
}
const myCGPA = GPA_MARK(60)
