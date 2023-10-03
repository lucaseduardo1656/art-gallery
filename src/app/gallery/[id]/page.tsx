"use client";
import ArtContainer from "@/components/ArtContainer";
import { useRouter } from "next/navigation";
import artworks from "@/data/artworks.json";
import NavBar from "@/components/Navbar";

export default function AdminClientsPage({
  params,
}: {
  params: { id: number };
}) {
  const router = useRouter();
  const id = Number(params.id);

  const artwork = artworks.find((artwork) => artwork.id === id);

  if (!artwork) {
    return <>{typeof window !== "undefined" && router.replace("/404")}</>;
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-10">
      <NavBar />
      <ArtContainer
        key={artwork.id}
        id={artwork.id}
        title={artwork.title}
        ano={artwork.ano}
        artist={artwork.artist}
        description={artwork.description}
        imageUrl={artwork.imageUrl}
      />
    </div>
  );
}
