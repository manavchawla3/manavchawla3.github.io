import React from 'react';

export default class ProgressRing extends React.Component {
  constructor(props) {
    super(props);

    const { radius, strokeWidth, progress } = this.props;

    this.state = {
      progress: 0
    };

    this.normalizedRadius = radius - strokeWidth * 2;
    console.log(this.normalizedRadius);
    this.circumference = this.normalizedRadius * 2 * Math.PI;
  }

  componentDidMount() {
    const interval = setInterval(() => {
      this.setState({ progress: this.state.progress + 1 });
      if (this.state.progress === this.props.progress) clearInterval(interval);
    }, 10);
  }

  render() {
    const {
      radius,
      strokeWidth = 4,
      strokeColor = 'black',
      trailColor = 'grey'
    } = this.props;

    const strokeDashoffset =
      this.circumference - (this.state.progress / 100) * this.circumference;

    return (
      <svg height={radius * 2} width={radius * 2}>
        <circle
          className="override-trail"
          stroke={trailColor}
          fill="transparent"
          stroke-width={strokeWidth}
          r={this.normalizedRadius}
          cx={radius}
          cy={radius}
        />

        <circle
          className="override-progress"
          stroke={strokeColor}
          fill="transparent"
          strokeDasharray={this.circumference + ' ' + this.circumference}
          style={{ strokeDashoffset }}
          stroke-width={strokeWidth}
          r={this.normalizedRadius}
          transform={`rotate(-90 ${radius} ${radius})`}
          cx={radius}
          cy={radius}
        />

        <text
          className="override-progress-text"
          x="50%"
          y="50%"
          text-anchor="middle"
          dy=".3em"
          dx=".2em"
        >
          {this.state.progress}%
        </text>
      </svg>
    );
  }
}
