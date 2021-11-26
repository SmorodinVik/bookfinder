const host = 'https://www.googleapis.com';
const prefix = 'books/v1/volumes';

const APIkey = 'AIzaSyDytZ69Hel2cG9qD3NWJzPpBX_gB0fqpZk';

const paginationStep = 30;

const pathCompiler = (requestText, category, sortBy, startIndex = 0) => {
  const formattedRequestText = requestText.split(' ').join('+');
  
  return `
    ${host}/${prefix}?q=${formattedRequestText}+subject:${category}&orderBy=${sortBy}&startIndex=${startIndex}&maxResults=${paginationStep}&key=${APIkey}
  `;
};

export default pathCompiler;
