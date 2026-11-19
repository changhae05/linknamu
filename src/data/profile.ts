export type LinkItem = {
  id: string;
  title: string;
  url: string;
  /** 제목 앞에 붙는 이모지 (선택) */
  emoji?: string;
};

export type Profile = {
  name: string;
  bio: string;
  /** public/ 기준 경로(예: "/profile.jpg") 또는 외부 이미지 URL. 비워 두면 이름 첫 글자를 보여 줍니다. */
  image?: string;
  links: LinkItem[];
};

export const profile: Profile = {
  name: "박창해",
  bio: "대학생 | 요즘에는 AI 개발에 관심이 많아요",
  image: "/profile.png",
  links: [
    { id: "github", emoji: "🐧", title: "깃허브", url: "https://github.com/changhae05" },
    { id: "instagram", emoji: "😊", title: "인스타그램", url: "https://www.instagram.com/nuit_etoile70" },
    { id: "email", emoji: "✉️", title: "이메일", url: "mailto:park_ch7@naver.com" },
  ],
};
