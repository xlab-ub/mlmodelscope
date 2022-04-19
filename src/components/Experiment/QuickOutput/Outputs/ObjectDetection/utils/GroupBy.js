export default function GroupBy(array, ...props) {
  return array.reduce((prev, cur) => {
    let val;
    props.forEach(prop => {
      if (!val) val = cur[prop];
      else val = val[prop];
    })
    if (!prev[val]) prev[val] = [];
    prev[val].push(cur);
    return prev;
  }, {})
}
