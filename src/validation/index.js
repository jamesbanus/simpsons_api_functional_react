import { characterSchema } from "./schemas";
import joi from "joi";

export const validate = async (payload) => {
  // call joi

  const r = joi.object(characterSchema);

  try {
    const results = await r.validateAsync(
      { search: payload },
      {
        abortEarly: false,
      }
    );
    console.log(results);
    return null;
  } catch (errors) {
    console.log(errors);
    const errorsMod = {};
    errors.details.forEach((error) => {
      errorsMod[error.context.key] = error.message;
      console.log(errors.details);
      console.log(errorsMod);
    });
    return errorsMod;
  }
};
