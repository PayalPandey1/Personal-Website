import Head from 'next/head'
import Link from 'next/link'
export default function Resume() {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center' }}>
        <b>Payal Pandey</b>
        <p style={{ wordWrap: 'break-word' }}>
          <b>Email:&nbsp;</b>
          <a href="mailto:payalpandey767@gmail.com">payalpandey767@gmail.com</a>
          &nbsp;|&nbsp;
          <b>Github:&nbsp;</b>
          <a href="https://github.com/PayalPandey1">
            https://github.com/PayalPandey1
          </a>
        </p>
      </div>
      <br />
      <br />
      <b>SUMMARY</b>
      <br />
      <br />
      Working at Reliance Jio as a Software Engineer in JioCloud team, Mumbai.
      <br />
      <br />
      <b>EDUCATION</b>
      <br />
      <table
        border="1"
        cellPadding="3"
        cellSpacing="1"
        style={{ borderCollapse: 'collapse', maxWidth: '100%' }}
      >
        <tr>
          <th align="center">
            <b>Year</b>
          </th>
          <th align="center">Degree</th>
          <th align="center">Institute</th>
          <th align="center">Percentage/CGPA</th>
        </tr>
        <tr>
          <td align="center" padding="15px">
            2015-2019
          </td>
          <td align="center" padding="15px">
            BTech in Computer Science and Engineering
          </td>
          <td align="center" padding="15px">
            Indian Institute of Information Technology, Una
          </td>
          <td align="center" padding="15px">
            8.66
          </td>
        </tr>
        <tr>
          <td align="center" padding="15px">
            2014
          </td>
          <td align="center" padding="15px">
            Class XII, CBSE-AISSCE
          </td>
          <td align="center" padding="15px">
            DPS, Kalyanpur
          </td>
          <td align="center" padding="15px">
            93.6%
          </td>
        </tr>
        <tr>
          <td align="center" padding="15px">
            2012
          </td>
          <td align="center" padding="15px">
            Class X, CBSE-AISSCE
          </td>
          <td align="center" padding="15px">
            DPS, Kalyanpur
          </td>
          <td align="center" padding="15px">
            10
          </td>
        </tr>
      </table>
      <br />
      <br />
      <b>SKILLS</b>
      <ul>
        <li>
          <b>Language:&nbsp;</b>Python (proficient), C/C++ (exposed){' '}
        </li>
        <li>
          <b>Testing:&nbsp;</b>unittest framework{' '}
        </li>
        <li>
          <b>Databases:&nbsp;</b>Mysql
        </li>
        <li>
          <b>Message Broker:&nbsp;</b>RabbitMQ
        </li>
        <li>
          <b>Tools:&nbsp;</b>Jira, Jenkins, Swagger
        </li>
      </ul>
      <br />
      <br />
      <b>EXPERIENCE</b>
      <br />
      <b>Software Development Engineer (Full Time) at Jio Platforms Limited</b>
      <small style={{ float: 'right' }}>
        <i> June 2019- Present</i>
      </small>
      <br />
      <b>
        Technology Stack: Python, OpenCV, unittest, RabbitMQ, Swagger, Flask
      </b>
      <ul>
        <li>
          Worked on the creation of detection batch service for face recognition
        </li>
        <li>
          Writing unit-tests for all business logic in code, setting up
          continuous integration for running unit tests
        </li>
        <li>
          Creating and using APIs and writing backend server-side code in Python
        </li>
        <li>Creating documentation of APIs using Swagger</li>
        <li>
          Worked on training the face recognition model and on parameter tuning
        </li>
      </ul>
      <br />
      <br />
      <b>
        Software Development Intern at KritiKal Solutions
        <small style={{ float: 'right' }}>
          <i> May 2018- July 2018</i>
        </small>
      </b>
      <br />
      <b>Technology Stack: OpenCV, C++, PostgreSQL</b>
      <br />
      <ul>
        <li>
          Worked on the creation of an attendance management system for the
          startup which made use of face recognition technology.
        </li>
      </ul>
      <br />
      <br />
      <b>RESEARCH WORK/CONFERENCES ATTENDED</b>
      <br />
      <ul>
        <li>
          Attended ICAEEC-2019 held at Indian Institute of Information
          Technology, Allahabad.
        </li>
        <li>
          Published a review paper for my major project: Behavioral Lie
          Detection using Physiological Signals and Machine Learning
        </li>
      </ul>
      <br />
      <br />
      <b>ONLINE COURSE</b>
      <br />
      <br />
      Completed a nanodegree course by Udacity on Introduction to Artificial
      Intelligence with Python.
      <br />
      <a href="https://drive.google.com/file/d/1-cQQZk-au19oCNcVy84AlL2tMez3XDQd/view?usp=sharing">
        https://drive.google.com/file/d/1-cQQZk-au19oCNcVy84AlL2tMez3XDQd/view?usp=sharing
      </a>
      <br />
      <br />
      <b>MAJOR PROJECT</b>
      <br />
      <b>
        Behaviour Lie Detection using Facial emotions and physiological signals
        (Final Year BTech Project)
      </b>
      <br />
      <small>
        <b>Prof. Divyansh Thakur</b>
      </small>
      <ul>
        <li>
          Created a behavioural lie detector system by judging the disparity
          between emotions displayed by a person and the actual emotions
          experienced detected physiological signals{' '}
        </li>
        <li>
          Conducted Literature Review for the method used for the classification
          of facial emotions as well as for the selection of physiological
          sensor to be used and published a review paper for the same
        </li>
        <li>Collected and created a dataset for varying facial emotions</li>
      </ul>
      <br />
      <br />
      <b>SCHOLASTIC ACHIEVEMENTS</b>
      <br />
      <ul>
        <li>Bronze medalist of my batch in Computer Science.</li>
      </ul>
      <br />
      <br />
      <b>EXTRACURRICULAR</b>
      <ul>
        <li>Literary Head (English) of IIIT, Una’s magazine Amogh</li>
        <li>Literary enthusiast: Learning French</li>
      </ul>
    </div>
  )
}
