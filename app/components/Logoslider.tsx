import Image from "next/image";

export default function Logoslider() {
  const images = [
    "/Adkings-logo.jpeg",
    "/AdkoreeLogo.jpg",
    "/Philops.png",
    "/Adkings-logo.jpeg",
    "/Adkings-logo.jpeg",
    "/Adkings-logo.jpeg",
    "/Adkings-logo.jpeg",
    "/Adkings-logo.jpeg",
    "/Adkings-logo.jpeg",
    "/Adkings-logo.jpeg",
    "/Adkings-logo.jpeg",
    "/Adkings-logo.jpeg",
    "/Adkings-logo.jpeg"
  ];

  return (
    <div className="relative overflow-x-scroll h-screen">
      <div className="flex flex-nowrap relative">
        <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-white to-transparent"></div>
        <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white to-transparent"></div>
        {images.map((image, index) => (
          <div
            key={`item-${index}`}
            className="flex-shrink-0 bg-gray-200 m-4 rounded-lg overflow-hidden"
          >
            <Image
              src={image}
              alt={`Item ${index + 1}`}
              width={48}
              height={48}
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
