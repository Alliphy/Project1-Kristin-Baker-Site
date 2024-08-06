const TheBooks = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <p className="text-6xl pt-20 pb-20">The Books</p>
      {/* <div className="flex flex-col items-center lg:p-5 md:p-3 sm:p-1"> */}
      {/* <p className="text-5xl pt-10 pb-5">Cobalt</p> */}
      {/* </div> */}
      <section className="lg:w-[500px] md:w-[300px] sm:w-[200px] lg:h-[700px] md:h-[500px] sm:h-[300px] flex flex-col justify-evenly items-center">
        <section className="h-full flex justify-center items-center bg-[url('/cobalt-book-img.jpg')] bg-center bg-cover bg-no-repeat">
          <div className="flex h-full items-center sm:text-md md:text-2xl lg:text-3xl text-wrap opacity-0 hover:bg-violet-600 hover:opacity-100 ">
            Kate, a young girl, is cursed with a unique affliction: every
            morning she wakes up with a new face. This condition stems from a
            childhood accident involving the mysterious and deadly substance,
            cobalt. To escape her abusive aunt, Kate stows away on an airship,
            embarking on a perilous journey through a forest filled with
            dangerous creatures and secrets. As she battles for survival, she
            uncovers the true nature of cobalt and its impact on the world
            around her.
          </div>
        </section>
      </section>
      <h2 className="text-6xl p-20 text-center">Incoming...</h2>
      <div className="w-full flex justify-around">
        <p className="p-5">SeaWood</p>
        <p className="p-5">Cobalt 2</p>
      </div>
      <section className="h-[600px] flex justify-around">
        <section className="w-2/5 h-full flex justify-center items-center bg-[url('/seawood-img.jpeg')] bg-center bg-cover bg-no-repeat">
          <div className="flex h-full items-center sm:text-md md:text-xl lg:text-2xl text-wrap opacity-0 hover:bg-violet-600 hover:opacity-100 ">
            When a mysterious affliction begins to spread along coastal
            communities, people are transformed into something monstrous. Drawn
            inexorably to the sea, these afflicted become feral, their skin pale
            and clammy, their eyes vacant. Locals dub them the Salt-Crazed.
            Driven by an insatiable hunger for salt, they pose a growing threat,
            not just to coastal towns but to the entire world. As the
            Salt-Crazed evolve and their numbers swell, a desperate battle for
            survival ensues.
          </div>
        </section>

        <section className="w-2/5 h-full flex justify-center items-center bg-[url('cobalt-sequel-img.jpeg')] bg-center bg-cover bg-no-repeat">
          <div className="flex h-full items-center sm:text-md md:text-xl lg:text-2xl text-wrap opacity-0 hover:bg-violet-600 hover:opacity-100 ">
            Kate has survived the perils of the forest and the mysteries of her
            ever-changing face. Now, an adult, she inherits her father&apos;s
            cobalt mining empire. The once-mysterious substance, once a curse,
            is now her lifeblood. But the world of business is a treacherous
            one. As Kate navigates the complexities of running a multinational
            corporation, she discovers a sinister plot to undermine her
            authority and seize control of the company. The cobalt, it seems,
            holds a power far greater than anyone imagined, and those who seek
            it will stop at nothing to possess it. With her life and her legacy
            on the line, Kate must once again rely on her resilience and the
            enigmatic properties of cobalt to protect her empire and uncover the
            truth behind the growing darkness.
          </div>
        </section>
      </section>
    </div>
  );
};

export { TheBooks };
