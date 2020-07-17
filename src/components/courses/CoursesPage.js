import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import * as courseActions from '../../redux/actions/courseActions';
import { bindActionCreators } from 'redux';

const CoursesPage = props => {
    useEffect(() => {
        props.actions.loadCourses().catch(error => {
            alert('Loading courses failed ' + error);
        });
    }, []);

    return (
        <>
            <h2>Courses</h2>
            {props.courses.map(c => (
                <div key={c.title}>{c.title}</div>
            ))}
        </>
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
