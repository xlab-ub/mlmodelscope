import React from 'react';

export default function Icon(props) {
  switch (props.icon) {
    case 'arrow':
      return <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15"><path d="m8.21 14.88.708-.67a.392.392 0 0 0 0-.575l-5.54-5.254H15.57A.418.418 0 0 0 16 7.974v-.948a.418.418 0 0 0-.429-.407H3.377l5.54-5.254a.392.392 0 0 0 0-.575L8.212.119a.445.445 0 0 0-.606 0L.125 7.213a.392.392 0 0 0 0 .574l7.48 7.094a.445.445 0 0 0 .606 0Z" fill="#000"/></svg>;
    case 'check':
      return <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 13"><path d="M18.675.292c.433.392.433 1.026 0 1.38L7.473 12.681c-.361.425-1.006.425-1.405 0L.298 7.01c-.397-.355-.397-.988 0-1.38a1.037 1.037 0 0 1 1.44 0l5.051 4.966L17.271.292c.399-.39 1.044-.39 1.404 0Z" fill="#000"/></svg>
    case 'ellipsis':
      return <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 4"><path d="M2 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM10 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM20 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" fill="#000"/></svg>;
    case 'x':
      return <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path d="M13.656 12.212c.41.41.41 1.072 0 1.481a1.052 1.052 0 0 1-1.485 0L7 8.5l-5.207 5.193a1.052 1.052 0 0 1-1.485 0 1.045 1.045 0 0 1 0-1.481L5.517 7.02.307 1.788a1.045 1.045 0 0 1 0-1.481 1.052 1.052 0 0 1 1.485 0L7.001 5.54 12.207.348a1.052 1.052 0 0 1 1.486 0c.41.408.41 1.072 0 1.48L8.484 7.02l5.172 5.192Z" fill="#000"/></svg>
  }
}
