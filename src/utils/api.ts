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

  const result = (await response.json()) as APICharacters;
  console.log(result.results);
  if (result.results.length == 0) {
    console.log("empty");
    return {
      image: {
        screen_url:
          "https://images.unsplash.com/photo-1531257243018-c547a2e35767?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=782&q=80",
      },
      name: "Character not found",
      birth: "not born",
      publisher: { name: "not published" },
    };
  }
  return result.results[0];
}

export async function getCharacters(name?: string) {
  const response = await fetch(
    `https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/characters/?api_key=3ddd177d9376a5571e28309e6dc67408e1ed0854&format=json&filter=publisher:marvel${
      name ? `,name:${name}` : ""
    }&field_list=birth,gender,name,image,publisher`
  );
  if (!response.ok) {
    return [];
  }
  const result = (await response.json()) as APICharacters;

  return result.results;
}
