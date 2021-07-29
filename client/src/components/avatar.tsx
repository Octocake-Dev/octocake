import Image from "next/image";

import styled from "styled-components";

const StyledAvatar = styled(Image)`
  border-radius: 10px;
  background-color: var(--color-primary-300, gray);
`;

export default StyledAvatar;
