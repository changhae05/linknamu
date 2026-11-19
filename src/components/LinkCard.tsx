type Props = {
  title: string;
  url: string;
};

export default function LinkCard({ title, url }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-xl border-2 border-foreground px-5 py-4 text-center font-semibold transition hover:-translate-y-0.5 hover:bg-foreground hover:text-background active:translate-y-0"
    >
      {title}
    </a>
  );
}
