// import { useLoaderData } from "react-router-dom";

export default function TheAuthor() {
  // const { author } = useLoaderData();

  // console.log("author data:", author); // Add a log to check data

  return (
    <div className="p-5">
      <div className="flex pl-5 pt-20">
        <img
          src="/davina-tennant.jpg"
          alt="portrait of Kristin Baker"
          className="object-cover w-2/4 rounded-full shadow-2xl"
        />
        <div className="w-2/4 pl-5 flex flex-col justify-center pl-8  pr-8">
          <h2>Kristin Baker</h2>
          <p>{quote}</p>
        </div>
      </div>
      <div className="pt-32">
        <p>Ahoy! There be Bloggin'</p>
        <p>Posts</p>
        <p>Posts</p>
      </div>
    </div>
  );
}

const quote = `
Kristin Baker is a lifelong wordsmith whose passion for storytelling ignited at a tender age. With a pen or laptop as her constant companion, she has spent countless hours crafting worlds and characters that dance across the pages of her imagination. Her debut novel, Cobalt, marks a significant milestone in her literary journey, bringing her vivid storytelling to life for readers everywhere.

When not lost in the realms of fiction, Kristin revels in the role of a devoted mother to her six children, finding joy in their laughter and inspiration in their endless energy. A self-proclaimed goofy lady, she infuses her life with humor and lightheartedness, leaving a trail of smiles wherever she goes. Nature holds a special allure for Kristin, as she finds solace and adventure in hiking through the great outdoors. Whether it’s immersing herself in the tranquility of a body of water or embarking on unexpected encounters with snakes or crabs, her spirit for exploration knows no bounds.`;
