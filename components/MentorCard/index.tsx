import Image, { StaticImageData } from "next/image";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import AnimatedTitle from "@/components/AnimatedTitle";

interface MentorCardProps {
  index?: number;
  name: string;
  role: string;
  company: string;
  profilepic: StaticImageData;
  linkedin?: string;
}

const MentorCard: React.FC<MentorCardProps> = ({
  name,
  role,
  company,
  profilepic,
  linkedin = "#",
}) => {
  return (
    <AnimatedTitle delay={0.2} viewport={true}>
      <div className="flex flex-col gap-4 w-full max-w-[280px] md:max-w-[300px] lg:max-w-[320px] group">
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-[16px] h-[280px] md:h-[300px] lg:h-[320px]">
          <Image
            src={profilepic}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            placeholder="blur"
          />
          {/* Gradient Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
            {linkedin && linkedin !== "#" && (
              <Link
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-300"
              >
                <LinkedInLogoIcon className="w-5 h-5 text-white" />
                <span className="text-white text-sm font-bold">Connect</span>
              </Link>
            )}
          </div>
        </div>

        {/* Info Container */}
        <div className="flex flex-col gap-2">
          <div>
            <Link
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg md:text-xl font-bold text-white leading-tight hover:underline transition-all duration-300 inline-block"
            >
              {name}
            </Link>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm md:text-base font-bold text-secondary-blue">
              {role}
            </p>
            <p className="text-xs md:text-sm font-medium text-supporting-mediumGray">
              @ {company}
            </p>
          </div>
        </div>
      </div>
    </AnimatedTitle>
  );
};

export default MentorCard;
