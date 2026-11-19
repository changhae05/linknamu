export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  /** public/ 기준 경로 (예: "/profile.jpg"). 비워 두면 이름 첫 글자를 보여 줍니다. */
  image?: string;
  links: LinkItem[];
};

// TODO: 아래는 보여 주기용 더미 값입니다. 진짜 내용으로 바꿔 주세요.
export const profile: Profile = {
  name: "Park Changhae",
  bio: "between idiot & genius",
  image: "/profile-placeholder.svg",
  links: [
    { id: "github", title: "GitHub", url: "https://github.com/" },
    { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com/" },
    { id: "blog", title: "Blog", url: "https://example.com/" },
  ],
};
