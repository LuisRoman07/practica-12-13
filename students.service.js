

const makeStudentsService = (name, lastname, age) => {

    try {
    return `your name: ${name}\nyour lastname: ${lastname}\n your age: ${age}`
    } catch (error) {
        return error
    }
}

const makeStudent = makeStudentsService("Roman", "Lino", 18)

console.log(makeStudent)