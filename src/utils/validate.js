export const validate = async (schema, payload,setError) => {
  try {
      await schema.validateAsync(payload, { abortEarly: false })
  } catch (err) {
       setError(err.message);
  }
}