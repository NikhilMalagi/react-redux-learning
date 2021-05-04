const moment = require('moment');
const simpleGit = require('simple-git');

// const FILEPATH1 = './grid/basic-grid.html';
// const FILEPATH2 = './grid/base.css';
// const FILEPATH3 = './grid/basic-grid.css';

const DATE = moment().subtract(133,'d').format();


simpleGit().commit("uncommitted components",{'--date':DATE}).push()