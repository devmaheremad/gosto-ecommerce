import { SocialLinkTypeProps } from "../@types/SocialLink.types";

const SocialLink = ({ socialLink, socialSvg }: SocialLinkTypeProps) => {
  return <a href={socialLink}>{socialSvg}</a>;
};

export default SocialLink;
