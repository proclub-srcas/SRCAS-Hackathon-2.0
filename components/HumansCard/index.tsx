import Image, { StaticImageData } from "next/image";
import {
  TwitterLogoIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";

import { IconProps } from "@radix-ui/react-icons/dist/types";
import { ComponentType } from "react";
import Link from "next/link";

interface SocialMediaIconProps {
  Icon: ComponentType<IconProps>;
  href: string;
}

const SocialMediaIcon = ({ Icon, href }: SocialMediaIconProps) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    title="Social Media Link"
  >
    <Icon
      className="w-7 h-7 bg-[#161616] text-supporting-darkGray transition ease-in-out delay-150 
		hover:scale-125 duration-300 rounded-md"
    />
  </Link>
);

interface HumansCardProps {
  index: number;
  name: string;
  role?: string;
  role2?: string;
  role3?: string;
  profilepic: StaticImageData;
  linkedin?: string;
  twitter?: string;
  github?: string;
  instagram?: string;
  behance?: string;
  showSocialLinks?: boolean;
}

const HumansCard: React.FC<HumansCardProps> = ({
  name,
  role,
  role2,
  profilepic,
  linkedin = "#",
  twitter = "#",
  github = "#",
  instagram = "#",
  showSocialLinks = true
}: HumansCardProps) => {
  // Helper function to add line breaks after every 3 words
  const addLineBreaks = (text: string) => {
    const words = text.split(' ');
    const result = [];
    for (let i = 0; i < words.length; i += 3) {
      result.push(words.slice(i, i + 3).join(' '));
    }
    return result.map((line, index) => (
      <span key={index}>
        {line}
        {index < result.length - 1 && <br />}
      </span>
    ));
  };

  return (
    <>
      <div className="flex flex-col gap-3 p-[16px] shadow text-white justify-center items-center">
        <Image
          src={profilepic}
          className="w-[232px] h-[232px] outline-none object-cover rounded-[12px]"
          placeholder="blur"
          alt="Profile Picture"
        />

        <div className="w-full flex flex-col gap-2 rounded-b-[8px] text-center">
          <p className="sm:text-xl text-lg text-white font-bold">{name}</p>
          {role && (
            <div className="flex flex-col gap-1">
              <div className="font-bold text-supporting-mediumGray text-sm sm:text-md break-words text-center">
                {addLineBreaks(role)}
              </div>
              {role2 && (
                <div className="font-bold text-supporting-mediumGray mb-2 text-sm sm:text-md leading-7 break-words text-center">
                  {addLineBreaks(role2)}
                </div>
              )}
             
            
            </div>
          )}
            
       
            {showSocialLinks && (
              <div className="flex gap-6 justify-center">
                {linkedin && <SocialMediaIcon href={linkedin} Icon={LinkedInLogoIcon} />}
                {instagram && <SocialMediaIcon href={instagram} Icon={InstagramLogoIcon} />}
              </div>
            )}
        
        </div>
      </div>
    </>
  );
};

export default HumansCard;
