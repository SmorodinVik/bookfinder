export default (requestText, category, sortBy) => {
  const formattedRequestText = requestText.split(' ').join('+');
  return `?q=${formattedRequestText}+subject:${category}&orderBy=${sortBy}`;
};