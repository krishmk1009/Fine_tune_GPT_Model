/* api.js */
import { Configuration, OpenAIApi } from 'openai'
const openaiApiKey ={your api key here}
const configuration = new Configuration({
  apiKey: openaiApiKey
})

export const openai = new OpenAIApi(configuration)