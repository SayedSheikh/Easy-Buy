import Banner from "@/components/banner";
import Featured from "@/components/Featured";

export default function Home() {
  return (
    <div>
      {/* <section className="hero min-h-[70vh] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Welcome to MyApp</h1>
            <p className="py-6">Discover amazing products!</p>
          </div>
        </div>
        
      </section> */}

      <Banner />
      <Featured />
    </div>
  );
}
