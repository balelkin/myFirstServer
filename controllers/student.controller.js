const students = [
    {id: 1, name: 'Ivan', facultet: 'phizmat'},
    {id: 2, name: 'Denis', facultet: 'pgf'}, 
    {id: 3, name: 'Tolia', facultet: 'ffg'} 
]
exports.list = (async(req, res, next)=>{
    res.status(200)
    res.json(students)
})
exports.findById = async (req, res, next)=>{
    const id = +req.params.id;
    const stud = students.find((i)=> i.id === id)
    res.status(200)
    res.json(stud)
}
exports.delete = async (req, res, next)=>{
    const id = +req.params.id;
    const stud = students.filter((i)=> i.id !== id)
    res.status(200)
    res.json(stud)
}

exports.create  = async (req, res, next)=>{
    const newStudent = req.body;
    newStudent.id = students.length + 1
    newStudent.name = ''
    newStudent.age = ''
    newStudent.job = ''
    newStudent.phone = ''
    students.push(newStudent)
    console.log('body', req.body);
    res.status(200)
    res.json(stud)
}
exports.update  = async (req, res, next)=>{
    const id = +req.params.id;
    const stud = students.find((i)=> i.id === id)
    stud.name = ''
    stud.age = ''
    stud.job = ''
    stud.phone = ''
    console.log('body', req.body);
    res.status(200)
    res.json(students)
}

