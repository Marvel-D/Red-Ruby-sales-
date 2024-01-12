export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col justify-center items-center text-black">
      {children}
    </div>
  );
}
