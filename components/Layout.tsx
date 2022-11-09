import Meta from "./Meta";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Meta />
      <main>{children}</main>
    </>
  );
}
