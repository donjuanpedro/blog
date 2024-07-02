import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  coverImageCaption: string;
  date: string;
  author: Author;
};

export function PostHeader({ title, coverImage, coverImageCaption, date, author }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="flex-col justify-center mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
        <div className="flex justify-center mt-[5px] italic">
        <p className="text-gray-400">{coverImageCaption}</p>
        </div>
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
}
