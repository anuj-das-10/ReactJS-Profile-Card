/* eslint-disable react/prop-types */
import './experience.css';

const Experience = ({duration, role, organization, learning}) => {
    return (
        <div className="experience-card">
            <p className='duration'>{duration}</p>
            <h3 className="role">{role}</h3>
            <p className='org'>{organization}</p>
            <p className='learning'>{learning}</p>
        </div>
    )
}

export default Experience;