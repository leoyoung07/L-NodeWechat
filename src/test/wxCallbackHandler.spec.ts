import { expect } from 'chai';
import wxCallbackHandler from '../wxCallbackHandler';

describe('wxCallbackHandler', () => {
  it('should handle text type message', async () => {
    const message = {
      Content: '666',
      CreateTime: '1519288219',
      FromUserName: 'ol5OkuP-17hwCp449IhkTWeukERQ',
      MsgId: '6525293214262319777',
      MsgType: 'text',
      ToUserName: 'gh_bb1a230ad0af'
    };
    const actual = JSON.stringify(await wxCallbackHandler(message, null));
    const expected = JSON.stringify({
      content: '666',
      type: 'text'
    });
    expect(actual).equal(expected);
  });

  it('should handle binary type message', async () => {
    const message = {
      CreateTime: '1519288469',
      FromUserName: 'ol5OkuP-17hwCp449IhkTWeukERQ',
      MediaId:
      'YczYH5bdogEA1rG_TmjC-439E7on5ThhvR2U9uzA61O4aew6jemlg_Iybr7ZMcip',
      MsgId: '6525294288004143799',
      MsgType: 'image',
      PicUrl:
      'http://mmbiz.qpic.cn/mmbiz_jpg/' +
      'O8BtB632j55ibj6ibiaCNwyAsjUmU2YbUnRyriaaicMDicu7CK9fL6J4ysPhnMgXjUheXdxFJ32MaxVhu5rF4hKDS5sw/0',
      ToUserName: 'gh_bb1a230ad0af',
    };
    const actual = JSON.stringify(await wxCallbackHandler(message, null));
    const expected = JSON.stringify({
      content: JSON.stringify(message),
      type: 'text'
    });
    expect(actual).equal(expected);
  });
});
