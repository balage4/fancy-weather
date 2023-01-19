const throwStatusError = (statusCode, backendMessage) => {
  if (statusCode < 200 || statusCode >= 300) throw new Error(backendMessage || 'Something went wrong!');
  return;
}

export default throwStatusError;