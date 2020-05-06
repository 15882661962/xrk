import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';

import TaskItem from './Task/TaskItem';
import TaskData from '../moke/TaskData.json';
class TaskScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    var taskData = TaskData.result.task_data;
    return (
      <ScrollView>
        <View style={styles.task}>
          <Text style={styles.taskText}>做任务，赢取丰厚奖励</Text>
        </View>
        <TaskItem taskData={taskData} />
      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  task: {
    alignItems: 'center',
  },
  taskText: {
    color: '#666',
    padding: 30,
    fontSize: 16,
  },
});

export default TaskScene;
