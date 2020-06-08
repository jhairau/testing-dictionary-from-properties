// Import stylesheets
import './style.css';
import md5 from 'md5';
import {int} from 'random';

console.clear();

const statuses = ['todo', 'inProgress', 'review', 'released'];
const tags = ['FRONTEND', 'BACKEND', 'DEVOPS'];

const generateId = (props: string[]) => {
  const sorted = props.sort();
  
  return md5(sorted.join(''));
}

let items = [];
let idxDict = new Map();

for (let i = 0; i < 1000; i++) {

  const status = statuses[int(0, statuses.length - 1)];
  let tagsHere = [];
  for (let j = 0; j < int(0,10); j++) {
    const tagIdx = int(0, tags.length - 1);
    const tagNow = tags[tagIdx];
    tagsHere = (tagsHere.indexOf(tagNow) === -1) ? [...tagsHere, tagNow] : tagsHere;
  }

  let item = {
    status,
    tags: tagsHere
  }


  items.push(item);

  const props = [
    `status:${status}`,
    `tags:${tagsHere.sort().join('-')}`
  ]

  const id = generateId(props);

  const v = idxDict.has(id) ? [...idxDict.get(id), item] : [item];
  idxDict.set(id, v);
}


console.log(idxDict)