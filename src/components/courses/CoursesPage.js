import React, { useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import * as courseActions from '../../redux/actions/courseActions';
import { bindActionCreators } from 'redux';

const CoursesPage = props => {
    const [course, setCourse] = useState({ title: '' });

    const handleChange = event => {
        const course = { ...course, title: event.target.value };
        setCourse(course);
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.actions.createCourse(course); //(courseActions.createCourse(course));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Courses</h2>
            <h3>Add Course</h3>
            <input type='text' onChange={handleChange} value={course.title} />
            <input type='submit' value='Save' />
            {props.courses.map(c => (
                <div key={c.title}>{c.title}</div>
            ))}
        </form>
    );
};

CoursesPage.propTypes = {
    actions: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
