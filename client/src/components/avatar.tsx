/* eslint-disable jsx-a11y/alt-text */
import Image, { ImageProps } from "next/image";

const Avatar = (props: ImageProps) => (
  <Image className="rounded-custom bg-primary-300" {...props} />
);

export default Avatar;
