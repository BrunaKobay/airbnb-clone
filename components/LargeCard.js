import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <div className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300]">
        <Image src={img} alt="" fill className="object-cover rounded-2xl" />
      </div>

      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>
        <button className="text-sm py-2 px-4 mt-5 bg-gray-900 text-white rounded-lg">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default LargeCard;
