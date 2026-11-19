import Image from "next/image";

type Props = {
  name: string;
  bio: string;
  image?: string;
};

// 흰 테두리 + 따뜻한 그림자로 사진이 살짝 떠 보이게
const avatarClass =
  "size-28 rounded-full ring-4 ring-white/80 shadow-[0_18px_40px_-12px_rgba(168,92,52,0.45),0_4px_12px_-4px_rgba(168,92,52,0.25)] sm:size-32";

export default function ProfileHeader({ name, bio, image }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      {image ? (
        <Image
          src={image}
          alt={`${name} 프로필 사진`}
          width={256}
          height={256}
          loading="eager"
          className={`${avatarClass} object-cover`}
        />
      ) : (
        <div
          aria-hidden
          className={`${avatarClass} flex items-center justify-center bg-white/60 text-4xl font-semibold text-ink`}
        >
          {name.charAt(0)}
        </div>
      )}
      <h1 className="mt-6 text-2xl font-bold tracking-tight text-ink">{name}</h1>
      <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{bio}</p>
    </header>
  );
}
