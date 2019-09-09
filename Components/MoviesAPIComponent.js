import axios from 'axios';

async function MoviesAPIComponent(query) {
  try {
    let res = await axios.get('http://api.tvmaze.com/search/shows?q=' + query);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

async function ShowAPIComponent(query) {
  try {
    let res = await axios.get('http://api.tvmaze.com/shows/' + query);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export {MoviesAPIComponent, ShowAPIComponent};
