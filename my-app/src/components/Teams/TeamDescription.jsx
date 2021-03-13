import React from 'react';
import './Teams.css';

function TeamDescription({ name }) {
  return (
    <div className="team-desc">
      <h3>{name ?? 'some title'}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
        ullamcorper, dui nec malesuada posuere, odio ante tincidunt dui, in
        pretium augue purus sollicitudin nulla. Proin sit amet nibh vel arcu
        consectetur finibus. Phasellus ullamcorper libero sed nunc aliquam
        porttitor quis ac nulla. Nunc et quam tristique, laoreet velit a,
        molestie.
      </p>
      <h3>Tasks</h3>
      <ul>
        <li>first task</li>
        <li>second task</li>
      </ul>
      <h3>Admins</h3>
      <ul>
        <li>first admin</li>
        <li>second admin</li>
      </ul>
      <h3>Members</h3>
      <ul>
        <li>first member</li>
        <li>second member</li>
      </ul>
    </div>
  );
}
export default TeamDescription;
