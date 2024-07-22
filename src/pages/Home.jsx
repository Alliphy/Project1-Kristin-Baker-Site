import styled from "styled-components";

const Home = () => {
  return (
    <HomePage>
      <ImageContainer>
        <a>
          <img src="/cobalt-landing-img.png" alt="Vite logo" />
        </a>
      </ImageContainer>
      <p>{quote}</p>
    </HomePage>
  );
};

const HomePage = styled.div`
  width: 100%;
  height: 100%;
`;

const ImageContainer = styled.div`
  width: 500px;
  height: 500px;
`;

const quote = `Katerina gripped the railing of the airship, the wind whipping her hair
        into a frenzy. Below, the world blurred into a dizzying canvas of greens
        and browns. Fear gnawed at her stomach, but it was overshadowed by a
        fierce determination. She wouldn't go back to her aunt, not ever. No
        matter what dangers awaited her in the unknown, they couldn't be worse
        than the life she was running away from. Taking a deep breath, Kate
        forced a smile onto her unfamiliar face. It was time to face whatever
        fate had in store for her.`;

export { Home };