import Header from '@/components/app/header';
import Footer from '@/components/app/footer';
import SignatureWorkspace from '@/components/app/signature-workspace';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <SignatureWorkspace />
      <Footer />
    </div>
  );
}
