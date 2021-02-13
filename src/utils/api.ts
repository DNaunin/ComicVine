import comiccardStories from "../components/typography/comiccard.stories";

export type APICharacter = {
  birth: string;
  gender: 1 | 2 | 3;
  image: {
    icon_url: string;
    medium_url: string;
    screen_url: string;
    screen_large_url: string;
    small_url: string;
    super_url: string;
    thumb_url: string;
    tiny_url: string;
    original_url: string;
    image_tags: string;
  };
  name: string;
  publisher: {
    napi_detail_url: string;
    id: string;
    name: string;
  };
};

export type APICharacters = {
  error: string;
  limit: number;
  offset: number;
  number_of_page_results: number;
  number_of_total_results: number;
  status_code: number;
  results: APICharacter[];
};

export async function getHero(id: number) {
  const response = await fetch(
    `https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/characters/?api_key=3ddd177d9376a5571e28309e6dc67408e1ed0854&format=json&filter=id:${id}&field_list=birth,gender,name,image,publisher`,
    {
      headers: { origin: "localhost" },
    }
  );
  if (!response.ok) {
    const result = await response.json();
    return {
      image: {
        medium_url: "",
      },
      name: result.error,
      birth: "Dead",
    };
  }
  const result = (await response.json()) as APICharacters;
  console.log(result.results[0]);
  return result.results[0];
}

// export async function getHeroes() {
//     const response = await fetch(`https://rickandmortyapi.com/api/character/`);
//     if (!response.ok) {
//       return [];
//     }
//     const result = (await response.json()) as APICharacters;
//     const characters = result.results.map((apiCharacter) =>
//       convertToCharacter(apiCharacter)
//     );
//     return result;
//   }

// export function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }
