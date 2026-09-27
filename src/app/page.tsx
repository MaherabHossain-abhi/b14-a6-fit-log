import Banner from "@/components/common/Banner";
import WorkoutPage from "@/components/workout";

export default function Home() {
  return (
    <div className="container mx-auto max-w-280">
      <Banner />
      <WorkoutPage />
    </div>
  );
}