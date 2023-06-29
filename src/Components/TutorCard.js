import React from 'react';
import './TutorCard.scss';
import edit from '../Images/edit.png';
import star from '../Images/star.png';
import contact from '../Images/contact.png';
import plus from '../Images/plus.png';
import StarRating from './StarRating';

export default function TutorCard() {
  const tutorData = [
    {
        Name: 'John Doe',
        YearsExp: '5',
        Headline: 'I am interested in Science and Web technology, \nBasic Lorem ipsum',
        Ratings: '4.5',
        SubjectsTaught: ['Science','Maths','Hindi'],
        NoOfStars: 4
    },
  ];

  return (
    <div>
      {
        tutorData.map((tutor)=>(
                <div className="tutor-card">
                    <div className="image-panel">
                        <div className="profile-image">
                            <img src={contact} style={{height:'82px', width: 'auto', translate: '0px 10px', objectFit: 'cover'}} alt='img not found'
                            ></img>
                        </div>
                        <h3>{tutor.Ratings} <img src={star} style={{width: '14px'}} alt='img not found'
                        ></img></h3>
                        <div className="ratings">
                            <p style={{translate: '0px -3px'}}>Ratings</p>
                        </div>
                    </div>
                    <div className="main-panel">
                        <div className="upper-panel">
                            <div className="tutor-name">
                                <div style={{fontSize: '20px', fontWeight: '700'}}>{tutor.Name},&nbsp;</div>
                                <div style={{fontSize: '20px', fontWeight: '700', color: 'grey'}}>{tutor.YearsExp}&nbsp;</div>
                                <div style={{fontSize: '20px', fontWeight: '700', color: 'grey'}}>Yrs Exp.</div>
                            </div>
                            <div>
                                <StarRating val = {4} />
                                <span style={{color: '#c0896b', fontSize: '12px', fontWeight: '400', translate: '0px -10px'}}>Awards</span>
                            </div>
                            <button className='profile-btn'><img src={edit} style={{width: '13px', padding: '4px', color: 'white'}} alt='img not found'></img>Profile</button>
                        </div>
                        <div className="info-panel">
                            <div style={{color: '#8D2CE1', fontWeight: '600'}}>Details</div>
                            <div className='tutor-headline'>{tutor.Headline}</div>    
                            <div className="subjects-panel">
                            {
                                tutor.SubjectsTaught.map((subject)=>(
                                    <div className="subject-btn">{subject}</div>
                                ))
                            } 
                            <img src={plus} style={{width: '12px', height: '12px', margin: '2px'}}/>
                            </div>
                        </div>
                    </div>
                </div>
        ))
      }
    </div>
  )
}
