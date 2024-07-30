const Home = () => {
  return (
    <div>
      <section className="w-full h-screen flex justify-center items-start bg-[url('/reduced-cobalt-landing-img.jpg')] bg-center bg-cover bg-no-repeat drop-shadow-2xl outline outline-gray-600">
        <button
          className="text-[#F6EFDF] text-6xl drop-shadow-md"
          style={{
            padding: "3rem",
            textShadow: "5px 5px 8px #5d575757",
          }}
        >
          Get lost in the pages of Cobalt
        </button>
      </section>
      <div className="flex flex-col items-center">
        <p className="w-2/4 pt-32 text-center">{quote}</p>
      </div>
    </div>
  );
};
const quote = `"Katerina gripped the railing of the airship, the wind whipping her hair
        into a frenzy. Below, the world blurred into a dizzying canvas of greens
        and browns. Fear gnawed at her stomach, but it was overshadowed by a
        fierce determination. She wouldn't go back to her aunt, not ever. No
        matter what dangers awaited her in the unknown, they couldn't be worse
        than the life she was running away from. Taking a deep breath, Kate
        forced a smile onto her unfamiliar face. It was time to face whatever
        fate had in store for her."`;

export { Home };
