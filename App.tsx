import React, { useState } from "react";
import { Text, View } from "react-native";
import axios from "axios";

type movie = {
  original_title?: string;
  original_language?: string;
}

const url = "https://api.themoviedb.org/3/movie/popular?api_key=yourapikey";

const getpopularMovies = async () => {
  const response = await axios.get(url);
  return response.data.results;
};

const App: React.FC = () => {
  const [ movie, setMovie ] = useState<movie>({}); 
  getpopularMovies().then(movies => {
    setMovie(movies[0]);
  });
  return(
    <View style={{ 
      flex: 1, 
      justifyContent: "center", 
      alignItems: "center" 
    }}>
      <Text>Movie Title: { movie.original_title }</Text>
      <Text>Language: { movie.original_language }</Text>
    </View>
  );
};

export default App;
