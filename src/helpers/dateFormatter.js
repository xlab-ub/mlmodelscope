export default function formatDate(dateString) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let year = dateString.slice(0, 4);
  let monthIndex = parseInt(dateString.slice(5, 7)) - 1;
  let day = dateString.slice(8, 10);
  return `${months[monthIndex]} ${day}, ${year}`;
}
