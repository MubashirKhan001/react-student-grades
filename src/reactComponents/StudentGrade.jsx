

const Totalgradestudent = (props) => {
  console.log(props.name,props.marks);
  
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
    else if (props.marks >= 50 && props.marks <=59 ) {
        studentGrade = "D";
    }

    else if (props.marks < 50) {
        studentGrade = "Fail";
    }

    else {
        studentGrade = 'Number Invalid';
    }

    return (
        <>
            <p>Your Name :{props.name}</p>
            <p>Marks: {props.marks}</p>
            <p>Grade: {studentGrade}</p>
        </>
    )
};




export default Totalgradestudent;
