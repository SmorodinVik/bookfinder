import { host, prefix, paginationStep, APIkey } from '../constants.js';

export const pathMaker = (request, startIndex = 0) => {
  
  
  return `${host}/${prefix}${request}&startIndex=${startIndex}&maxResults=${paginationStep}&key=${APIkey}`;
};

export const requestMaker = (requestText, category, sortBy) => {
  const formattedRequestText = requestText.split(' ').join('+');
  return `?q=${formattedRequestText}+subject:${category}&orderBy=${sortBy}`;
};
