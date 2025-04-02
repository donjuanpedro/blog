import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  coverImageCaption: string;
  date?: string;
  author?: Author;
};

export function PostHeader({ title, coverImage, coverImageCaption, author }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="flex-col justify-center mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
        <div className="flex justify-center mt-[5px] italic">
        <p className="text-gray-400">{coverImageCaption}</p>
        </div>
      </div>
    </>
  );
}
