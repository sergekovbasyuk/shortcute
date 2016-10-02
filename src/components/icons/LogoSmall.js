import React from 'react';

class LogoSmall extends React.Component {
  render() {
    return (
      <svg className={this.props.class} width={this.props.width} height={this.props.height} viewBox="0 0 26 24">
        <path d="M0 23H4L14.4 1h-3.7L0 23zm20.2-2.7c3.2 0 5.3-1.5 5.3-4.4 0-2.6-2-3.5-4.6-4.2-1.4-.4-2.2-.7-2.2-1.2 0-.4.4-.7 1-.7 1 0 2.6.4 4 1l1.5-2.7c-1.5-1-3.5-1.5-5.4-1.5-3 0-5.3 1.5-5.3 4.2s2 3.6 4.6 4.2c1.4.4 2 .6 2 1.2 0 .5-.3.7-1 .7-1.4 0-3-.4-4.5-1.4L14 18.4c2 1.3 4 2 6.2 2z" fill="#292929" fillRule="evenodd"/>
      </svg>
    );
  }
}

export default LogoSmall;
