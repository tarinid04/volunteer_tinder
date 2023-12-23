import React, { useState } from 'react'
import TinderCard from 'react-tinder-card';
import './TinderCards.css'

function TinderCards() {

const [jobs, setJobs] = useState([
  {
    name: 'Library' ,
    url:'https://www.thegrovelibrary.net/Profiles/library/Assets/ClientData/Images/Grove_Library_Section/021-Volunteer.jpg'
  }, 
  {
    name: 'AnimalWelfare' ,
    url:'https://www8.miamidade.gov/resources/images/services/volunteer.jpg'
  }, 
  {
    name: 'Tutoring' ,
    url:'http://jcfamilies.com/wp-content/uploads/2018/03/iStock-495774050-tutoring-b.jpg'
  }, 

]);

  return (
    <div className='card-container'>
    {
      jobs.map( jobs => (
        <TinderCard
         className='swipe'
         key={jobs.name}
         preventSwipe={['up', 'down']}
        >
          <div 
           style={ { backgroundImage: `url(${jobs.url})` } }
           className='card'
          >
            <h2>{jobs.name}</h2>
          </div>
        </TinderCard>
      ))

    }
    </div>
  )
}

export default TinderCards



