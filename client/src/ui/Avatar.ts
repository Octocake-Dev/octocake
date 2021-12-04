import Image from "next/image";

import { styled } from "../../stitches.config";

const Avatar = styled(Image, {
  borderRadius: "10px",
  backgroundColor: "$primary300",
});

export default Avatar;
