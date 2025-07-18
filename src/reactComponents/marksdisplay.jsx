import Totalgradestudent from './StudentGrade';
import "./app.css"

const Studentinfo = () => {

    const studentArray = [
        { name: "Ali", marks: 92 },
        { name: "Sara", marks: 74 },
        { name: "Zain", marks: 45 }
    ];

    return (
        <>
            {studentArray.map((student) =>

            (<Totalgradestudent  name={student.name} marks= {student.marks} />))
            }
        </>
    );
};


export default Studentinfo;