import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
class TimerButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerCount: this.props.timerCount || 60,
      timerTitle: this.props.timerTitle || '获取验证码',
      counting: false,
      selfEnable: true,
    };
    this._btnStart = this._btnStart.bind(this);
    this._countDown = this._countDown.bind(this);
  }

  _countDown() {
    const codeTime = this.state.timerCount;
    this.interval = setInterval(() => {
      const timer = this.state.timerCount - 1;
      if (timer === 0) {
        this.interval && clearInterval(this.interval);
        this.setState({
          timerCount: codeTime,
          timerTitle: this.props.timerTitle || '获取验证码',
          counting: false,
          selfEnable: true,
        });
      } else {
        this.setState({
          timerCount: timer,
          timerTitle: `重新获取(${timer}s)`,
        });
      }
    }, 1000);
  }

  _btnStart(start) {
    if (this.state.counting) {
      return;
    }
    if (start) {
      this._countDown();
      this.setState({
        counting: true,
        selfEnable: false,
      });
    } else {
      this.setState({selfEnable: true});
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const {onClick, style, enable} = this.props;
    const {counting, timerTitle, selfEnable} = this.state;
    return (
      <TouchableOpacity
        activeOpacity={counting ? 1 : 0.8}
        onPress={() => {
          if (!counting && enable && selfEnable) {
            this.setState({
              selfEnable: false,
            });
            this.props.onClick(this._btnStart(true));
          }
        }}
        style={styles.getcodeBtn}>
        <Text
          style={[
            styles.getcodeText,
            {color: !counting && enable && selfEnable ? '#fff' : '#999'},
          ]}>
          {this.state.timerTitle}
        </Text>
      </TouchableOpacity>
    );
  }
}

var styles=StyleSheet.create({
  getcodeBtn: {
    position: 'absolute',
    height: 40,
    right: 0,
    bottom: 0,
  },
  getcodeText: {
    fontSize: 12,
    lineHeight: 40,
  },
});

export default TimerButton