import Image from "next/image";

type Props = {
  name: string;
  bio: string;
  image?: string;
};

export default function ProfileHeader({ name, bio, image }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      {image ? (
        <Image
          src={image}
          alt={`${name} 프로필 사진`}
          width={208}
          height={208}
          loading="eager"
          className="size-44 rounded-full border-2 border-foreground object-cover sm:size-52"
        />
      ) : (
        <div
          aria-hidden
          className="flex size-44 items-center justify-center rounded-full border-2 border-foreground bg-foreground/10 text-6xl font-semibold sm:size-52"
        >
          {name.charAt(0)}
        </div>
      )}
      <h1 className="mt-8 text-2xl font-bold">{name}</h1>
      <p className="mt-2 text-base text-foreground/70">{bio}</p>
    </header>
  );
}
