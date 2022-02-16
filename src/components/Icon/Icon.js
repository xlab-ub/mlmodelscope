import React, {Component} from 'react';

export default class Icon extends Component {
  render() {
    switch (this.props.icon) {
      case 'arrow':
        return <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15"><path d="m8.21 14.88.708-.67a.392.392 0 0 0 0-.575l-5.54-5.254H15.57A.418.418 0 0 0 16 7.974v-.948a.418.418 0 0 0-.429-.407H3.377l5.54-5.254a.392.392 0 0 0 0-.575L8.212.119a.445.445 0 0 0-.606 0L.125 7.213a.392.392 0 0 0 0 .574l7.48 7.094a.445.445 0 0 0 .606 0Z" fill="#000"/></svg>;
      case 'ellipsis':
        return <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 4"><path d="M2 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM10 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM20 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" fill="#000"/></svg>;
    }
  }
}
