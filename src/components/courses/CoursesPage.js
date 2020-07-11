import React, {useState} from "react";

const CoursesPage = props => {
  const [course, setCourse] = useState({title: ""});

    const handleChange = (event) => {
      const course = {...course, title: event.target.value};
      setCourse(course)
    }

    const handleSubmit = (event) =>{
      alert(course.title);
      event.preventDefault()
    }

    return (
      <form onSubmit={handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input type="text" onChange={handleChange} value={course.title} />
        <input type="submit" value="Save" />
      </form>
    );
}

export default CoursesPage;
