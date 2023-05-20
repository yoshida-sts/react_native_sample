import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { getPopularMovies, getUpcomingMovies } from "../services/services";
import { SliderBox } from "react-native-image-slider-box";

type movie = {
  poter_path: string;
}

const Home: React.FC = () => {
  const [ movieImages, setMovieImages ] = useState<string[]>([]);


  useEffect(() => {
    getUpcomingMovies().then(movies => {
      setMovieImages(movies.map((movie) => "https://image.tmdb.org/t/p/w500" + movie.poster_path));
    });

    // getPopularMovies().then(movies => {
    //   setMovie(movies[0]);
    // });
  }, []);

  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }}>
      <SliderBox images={movieImages} />
    </View>
  );
};

export default Home;