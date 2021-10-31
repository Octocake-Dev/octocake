import * as yup from "yup";

export const schema = yup.object({
  title: yup.string().required("Title is required!"),
  description: yup.string().required("Description is required!"),
  body: yup.string().required("Body is required!"),
});
