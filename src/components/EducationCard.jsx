/* eslint-disable react/prop-types */
import './educationCard.css';

const EducationCard = ({duration, degree, institute}) => {
    return (
        <div className="education-card">
            <p className='duration'>{duration}</p>
            <h3 className="degree">{degree}</h3>
            <p className='institute'>{institute}</p>
        </div>
    )
};

export default EducationCard;