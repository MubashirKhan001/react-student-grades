import "./fail.css"
import "./pass.css"
import "./container.css"


const Totalgradestudent = (props) => {

    const ispassed = props.marks >= 50;

    let studentGrade = "";

    if (props.marks >= 90 && props.marks <= 100) {
        studentGrade = "A";
    }

    else if (props.marks >= 80 && props.marks <= 89) {
        studentGrade = "B";
    }

    else if (props.marks >= 70 && props.marks <= 79) {
        studentGrade = "C";
    }

    else if (props.marks >= 60 && props.marks <= 69) {
        studentGrade = "D";
    }
    else if (props.marks >= 50 && props.marks <= 59) {
        studentGrade = "E";
    }

    else if (props.marks < 50) {
        studentGrade = "Fail";
    }

    else {
        studentGrade = 'Number Invalid';
    }
    return (
        <div className="conainer">
            <h2>Your Name :{props.name}</h2>
            <h3>Marks: {props.marks}</h3>
            <h4>Grade: <span className={ispassed ? "pass" : "fail"}>{studentGrade}</span></h4>
        </div>
    )
};



export default Totalgradestudent;
