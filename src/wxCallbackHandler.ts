const wxCallbackHandler = async (message, context) => {
  let response = '';
  if (typeof message === 'string') {
    response = message;
  } else if (message.MsgType === 'text') {
    response = message.Content;
  } else {
    response = JSON.stringify(message);
  }
  return {
    content: response,
    type: 'text'
  };
};

export default wxCallbackHandler;
