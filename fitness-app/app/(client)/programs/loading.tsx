export default function Loading() {
  return (
    <div className="flex h-full min-h-[70vh] w-full items-center justify-center px-4">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#A64DFF] border-t-transparent" />

        {/* Text */}
        <p className="text-sm font-medium text-zinc-300">
          Loading programs...
        </p>
      </div>
    </div>
  );
}
