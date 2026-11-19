type Props = {
  title: string;
  url: string;
  emoji?: string;
};

export default function LinkCard({ title, url, emoji }: Props) {
  // mailto: 같은 링크는 새 탭으로 열면 빈 탭만 남으므로 웹 주소만 새 탭으로 엽니다.
  const isWeb = /^https?:\/\//.test(url);

  return (
    <a
      href={url}
      {...(isWeb && { target: "_blank", rel: "noopener noreferrer" })}
      className="grid grid-cols-[1.5rem_1fr_1.5rem] items-center gap-3 rounded-2xl border border-white/70 bg-white/45 px-5 py-4 shadow-[0_8px_24px_-14px_rgba(120,64,36,0.35)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/65 hover:shadow-[0_14px_30px_-14px_rgba(120,64,36,0.4)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      {/* 제목이 정확히 가운데 오도록 왼쪽 이모지 칸과 같은 폭의 빈 칸을 오른쪽에 둡니다. */}
      <span aria-hidden className="text-center text-lg leading-none">
        {emoji}
      </span>
      <span className="text-center text-[15px] font-semibold text-ink">{title}</span>
      <span aria-hidden />
    </a>
  );
}
