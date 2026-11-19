import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col px-6 pt-20 pb-16 sm:pt-28">
      {/* 상단: 원형 프로필 사진 · 이름 · 한 줄 소개 */}
      <ProfileHeader name={profile.name} bio={profile.bio} image={profile.image} />

      {/* 하단: 링크 카드 목록 (세로 배치) */}
      <ul className="mt-12 flex flex-col gap-4 sm:gap-5">
        {profile.links.map((link) => (
          <li key={link.id}>
            <LinkCard title={link.title} url={link.url} emoji={link.emoji} />
          </li>
        ))}
      </ul>
    </main>
  );
}
