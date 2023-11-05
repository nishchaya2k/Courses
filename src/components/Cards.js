import React from 'react'
import Card from './Card';
import { useState } from 'react';

const Cards = (props) => { 
    let courses = props.courses;
    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);
    
    function getCourses() {
        if(category === "All") {
            let allCourses = [];

            //king of 2d array solved, all data now will be contained in single array
            Object.values(courses).forEach(array => {
                array.forEach(courseData => {
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }
        else {
            //main sirf specific categiry ka data array krunga  
            return courses[category];      
        }

    }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {
            getCourses().map( (course) => (
            <Card key={course.id} 
            course = {course} 
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}/>
        ))
      }
    </div>
  )
}

export default Cards


//for using map, data should be in array form but data in apiUrl is in key-pairs forms 
//data store in array should be on the basis of category

//how values fetched for map and stored  them in array ?
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

//getCourses() will gives the data of all courses and with data we will create
// card for each course