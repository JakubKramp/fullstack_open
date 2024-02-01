import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      code here
    </div>
  )
}

export default Appconst Header = (props) => {
  return (
   <h1>{props.course.name}</h1>
  )
}

const Part = (props) => {
  return(
      <p>
        {props.name} {props.excercises}
      </p>
  )
}

const Content = (props) => {
    return (
        <>
        <Part name={props.course.parts[0].name} excercises={props.course.parts[0].exercises}/>
        <Part name={props.course.parts[1].name} excercises={props.course.parts[1].exercises}/>
        <Part name={props.course.parts[2].name} excercises={props.course.parts[2].exercises}/>
        </>
)
}
const Total = (props) => {
  return (
   <p>Number of exercises {props.course.parts.reduce((sum, part) => sum + part.exercises, 0)}</p>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App
