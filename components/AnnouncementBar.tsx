export function AnnouncementBar({
  message = "Quality merch built to last",
  sub,
}: {
  message?: string;
  sub?: string;
}) {
  return (
    <div className="bg-black px-4 py-2.5 text-center text-white">
      <p className="text-sm font-semibold tracking-wide">
        {message}
        {sub ? (
          <span className="ml-2 font-normal opacity-75">{sub}</span>
        ) : null}
      </p>
    </div>
  );
}
