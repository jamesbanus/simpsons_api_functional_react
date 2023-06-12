import joi from "joi";

// define schema

export const characterSchema = { search: joi.string().optional().min(3) };
