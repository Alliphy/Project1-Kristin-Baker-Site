const TheBooks = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <p className="text-6xl pt-20 pb-20">The Books</p>
      {/* <div className="flex flex-col items-center lg:p-5 md:p-3 sm:p-1"> */}
      {/* <p className="text-5xl pt-10 pb-5">Cobalt</p> */}
      {/* </div> */}
      <section className="lg:w-[700px] md:w-[300px] sm:w-[400px] lg:h-[900px] md:h-[700px] sm:h-[600px] flex flex-col justify-evenly items-center">
        <section className="h-full flex justify-center items-center bg-[url('/cobalt-book-img.jpg')] bg-center bg-cover bg-no-repeat">
          <div className="flex h-full items-center sm:text-md md:text-2xl lg:text-3xl text-wrap opacity-0 hover:bg-gray-600 hover:opacity-100 ">
            Katerina Lebel is the sole surviving heir of her father&apos;s
            Cobalt and iron mining businesses, until her overbearing aunt moves
            in. Kate has a unique quirk that sets her apart from others, who
            consider her cursed-ever since a childhood accident involving the
            mysterious and deadly substance Cobalt, she has woken up each
            morning with a new face. Now almost fourteen and fed up with her
            aunt&apos;s abuse, Kate sneaks onto an airship bound for the distant
            seaport.
          </div>
        </section>
      </section>
      <h2 className="text-6xl p-20 text-center">Incoming...</h2>
      <div className="w-full flex justify-around">
        <p className="p-5">SeaWood</p>
        <p className="p-5">Cobalt 2</p>
      </div>
      <section className="h-[600px] flex justify-around incomingBookSection">
        <section className="w-2/5 h-full flex justify-center items-center bg-[url('/seawood-img.jpeg')] bg-center bg-cover bg-no-repeat">
          <div className="flex h-full items-center sm:text-md md:text-xl lg:text-2xl text-wrap opacity-0 hover:bg-gray-600 hover:opacity-100 ">
            After a deadly illness began ravaging the village of Seawood,
            River&apos;s parents sent her with the rest of the village&apos;s
            children to live with foster families in an inland town until the
            emergency passed. Six years later, River vows to find out what
            happened to the adults in Seawood, and why, once they come of age,
            the children from her village are sent away and never heard from
            again. After River&apos;s best friend Windy is sent off, Taren, a
            boy from town, warns her to run before it&apos;s too late. Should
            River try to find out what happened to Windy and the others, or
            return to Seawood in the hopes that someone from her village is
            still alive? What else does Taren know that he&apos;s not telling
            her?
          </div>
        </section>

        <section className="w-2/5 h-full flex justify-center items-center bg-[url('cobalt-sequel-img.jpeg')] bg-center bg-cover bg-no-repeat">
          <div className="flex h-full items-center sm:text-md md:text-xl lg:text-2xl text-wrap opacity-0 hover:bg-gray-600 hover:opacity-100 ">
            The adventures of Kate and her friends continue with more danger and
            murderous trees and monsters and all that, which I can&apos;t go
            into here, because…spoilers.
          </div>
        </section>
      </section>
    </div>
  );
};

export { TheBooks };
