import React from "react";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "pl",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/49/500px_photo_%2856742622%29.jpeg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9856644
    },
    creator: "u1"
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/49/500px_photo_%2856742622%29.jpeg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9856644
    },
    creator: "u2"
  }
];

const UserPlaces = () => {
  //useParams gets dynamic segments react router is aware of - like userID - that we're using in routes. we can use this as a
  //segment to filter
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
