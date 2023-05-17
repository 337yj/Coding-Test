const changeInt = (time) => { 
  let [hour, minute] = time.split(':');
  return parseInt(hour)*60 + parseInt(minute);
}

const solution = (book_time) => {
  let answer = [];
  
  book_time.sort().forEach(time => {
      const start = changeInt(time[0]);
      const end = changeInt(time[1]);
      
      if (answer.length === 0) {
          answer.push(end + 10);
      } else {
          answer = answer.sort(); 
          let flag = true; 
          for (let i=0; i<answer.length; i++) {
              if (answer[i] <= start) {
                  answer[i] = end + 10;
                  flag = false; 
                  break;
              }
          }
          if (flag) answer.push(end + 10);
      }
  });
  
  return answer.length;
}
