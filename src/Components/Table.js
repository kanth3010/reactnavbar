import React from "react"
import "./table.css"

function Table (){
  return (
    <div className="tabel_back">
    <h1>List Of Courses</h1>
    <table id="customers">
  <tr>
    <th>Course</th>
    <th>Duration(Hours)</th>
    <th>Author Name</th>
  </tr>
  <tr>
    <td>Mastery of Rasengan</td>
    <td>48:00</td>
    <td>Master jiraiya</td>
  </tr>
  <tr>
    <td>Mastery of Chidori</td>
    <td>72:00</td>
    <td>Kakashi Sensai</td>
  </tr>
  <tr>
    <td>Multi Shadow clone Justsu</td>
    <td>24:00</td>
    <td>Naruto Uzumaki</td>
  </tr>
  <tr>
    <td>Introduction to javascript</td>
    <td>4:49</td>
    <td>R.Shrikanth</td>
  </tr>
  <tr>
    <td>Introduction to HTML and CSS</td>
    <td>5:45</td>
    <td>S.Sakthi</td>
  </tr>
  <tr>
    <td>Introduction to python</td>
    <td>7:45</td>
    <td>S.Balaguru</td>
  </tr>
  <tr>
    <td>Introduction to jQuery</td>
    <td>5:00</td>
    <td>S.Praga</td>
  </tr>
  <tr>
    <td>Introduction to ReactJS</td>
    <td>7:00</td>
    <td>Naveen Sensei</td>
  </tr>

</table>
</div>

  );
}

export default Table;