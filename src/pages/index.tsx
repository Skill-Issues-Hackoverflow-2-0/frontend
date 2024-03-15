import dynamic from "next/dynamic";

const Maps = dynamic(() => import ("../components/maps"), {
  ssr: false
})


export default function Home() {
  
  return (
  <div className="min-h-screen">
    <Maps />
  </div>
  );
}
