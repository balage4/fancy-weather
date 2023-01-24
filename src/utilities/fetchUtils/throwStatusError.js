import errorMessages from "../../common/messages/errorMessages";

const throwStatusError = (statusCode, responseMessage) => {
  if (statusCode < 200 || statusCode >= 300) throw new Error(responseMessage || errorMessages.fetchError);
  return;
}

export default throwStatusError;