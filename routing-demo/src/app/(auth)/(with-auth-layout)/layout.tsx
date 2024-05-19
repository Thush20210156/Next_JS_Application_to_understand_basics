export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="">Inner Layout</h1>
      {children}
    </div>
  );
}
