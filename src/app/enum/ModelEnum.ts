const modelEnum = {
  gpt: String(process.env.MODEL_OPENAI),
  deepseek: String(process.env.MODEL_DEEPSEEK)
};

export default modelEnum;