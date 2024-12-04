export default function RoutesLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return(
        <div className="mx-16 px-4 my-24">
            {children}
        </div>
    )
  }