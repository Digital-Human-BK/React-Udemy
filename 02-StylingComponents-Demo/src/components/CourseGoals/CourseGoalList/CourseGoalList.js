import React from 'react';

import styles from './CourseGoalList.module.css';
import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';

const CourseGoalList = props => {
  return (
    <ul className={styles["goal-list"]}>
      {props.items.map(goal => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
