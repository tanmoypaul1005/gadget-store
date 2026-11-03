const Loading = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <div className="max-w-6xl px-4 py-10 mx-auto sm:px-6 lg:px-8 animate-pulse">
        <div className="grid grid-cols-1 gap-8 mb-12 lg:grid-cols-2">
          <div className="rounded-2xl bg-[#111118] border border-white/5 aspect-square lg:aspect-auto lg:h-[480px]" />
          <div className="flex flex-col justify-center gap-5">
            <div className="w-24 h-6 rounded-full bg-white/10" />
            <div className="w-3/4 h-10 rounded-lg bg-white/10" />
            <div className="w-48 h-5 rounded bg-white/10" />
            <div className="space-y-2">
              <div className="h-4 rounded bg-white/10" />
              <div className="h-4 rounded bg-white/10" />
              <div className="w-2/3 h-4 rounded bg-white/10" />
            </div>
            <div className="h-px bg-white/5" />
            <div className="w-40 h-10 rounded-lg bg-white/10" />
            <div className="w-56 h-12 rounded-xl bg-white/10" />
            <div className="grid grid-cols-3 gap-3 pt-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className="h-16 rounded-xl bg-white/5" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
