import axios from 'axios';

const KEY = 'live_DiYErvTn3ouNOyvHKACwA2eZtU8zGWOiKdcfMpaqWG8Att7q8NmzTDtIyl65hyyb';

export default axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
  headers: { 'x-api-key' : KEY}
});