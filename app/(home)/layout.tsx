import Footer from "@/components/footer";
import Header from "@/components/header";

type Props = {
  children: React.ReactNode;
};
const layout = ({ children }: Props) => {
  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
