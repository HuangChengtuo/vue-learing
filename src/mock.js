import Mock from 'mockjs';

const r = Mock.Random;
let data = [];
for (let i = 0; i < 10; i++) {
  let temp = {
    title: r.cword(5, 10),
    img: r.dataImage('300x250', 'mockImg'),
    author: r.cname()
  }
  data.push(temp);
}
Mock.mock('hct.com', 'post', data);
