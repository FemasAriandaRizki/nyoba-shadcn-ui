import Navbar from "../Navbar";

type AppShellProps = {
  children: React.ReactNode;
}

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  return (
    <main>
      <Navbar></Navbar>
      {children}
    </main>
  );
};

export default AppShell;
