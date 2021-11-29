import { host, prefix, paginationStep, APIkey } from '../constants.js';

export default (request, startIndex = 0) => (
  `${host}/${prefix}${request}&startIndex=${startIndex}&maxResults=${paginationStep}&key=${APIkey}`
);
