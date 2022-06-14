import axios from 'axios';

export const translation = {
  fetchTranslation: async () => {
    try {
      const response =  await axios.get('https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=tr&dt=t&q=Hello guys');
      return response.data[0][0][0];
    } catch (error) {
      console.log('Can not fetch translation')
    }
  }
}