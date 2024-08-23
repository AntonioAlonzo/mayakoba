"use client";

import React, { useState } from "react";
import {
  Checkbox,
  Card,
  Button,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";

export default function Filter({ onApplyFilterClick }) {
  const PHOTOS = [
    { label: "Accomodations", value: "accomodations" },
    { label: "Events", value: "events" },
    { label: "F&B", value: "f&b" },
    { label: "Experiences", value: "experiences" },
    { label: "Pool & Beaches", value: "pool" },
    { label: "Resort", value: "resort" },
    { label: "Activities", value: "activities" },
    { label: "Wellness", value: "wellness" },
    { label: "Residences", value: "residences" },
  ];

  const OTHER = [
    { label: "Logos", value: "logos" },
    { label: "Brochure", value: "brochure" },
    { label: "Factsheet", value: "factsheet" },
    { label: "Offers", value: "offers" },
    { label: "Experiences", value: "experiences-other" },
    { label: "Weddings", value: "weddings" },
    { label: "Banquet Kit", value: "banquet" },
    { label: "Virtual Tour", value: "virtual" },
    { label: "Resort Map", value: "resort" },
    { label: "Daily Program", value: "daily" },
    { label: "Special Events", value: "special" },
    { label: "Reservations", value: "reservations" },
  ];

  const [isPhotosExpanded, setIsPhotosExpanded] = useState(true);
  const [isOthersExpanded, setIsOthersExpanded] = useState(false);

  function handleTypeClick(type) {
    onApplyFilterClick(type);
  }

  function togglePhotosList() {
    setIsPhotosExpanded(!isPhotosExpanded);
  }

  function toggleOthersList() {
    setIsOthersExpanded(!isOthersExpanded);
  }

  return (
    <div className="md:px-0 md:my-0 px-6 my-6">
      <p className="uppercase font-silk-serif">FILTER</p>

      <div className="flex justify-between items-center mt-3">
        <p
          className="cursor-pointer font-itc-franklin"
          onClick={togglePhotosList}
        >
          Photos
        </p>
        <button
          onClick={togglePhotosList}
          className="text-lg font-bold focus:outline-none"
        >
          {isPhotosExpanded ? "-" : "+"}
        </button>
      </div>

      {isPhotosExpanded && (
        <List>
          {PHOTOS.map((type, index) => (
            <ListItem
              className="p-0 cursor-pointer"
              key={index}
              onClick={() => handleTypeClick(type.value)}
            >
              <Typography
                color="blue-gray"
                className="font-itc-franklin px-3 py-2"
              >
                {type.label}
              </Typography>
            </ListItem>
          ))}
        </List>
      )}

      <hr></hr>

      <div className="flex justify-between items-center mt-3">
        <p
          onClick={() => handleTypeClick("video")}
          className="cursor-pointer font-itc-franklin"
        >
          Videos
        </p>
      </div>

      <hr></hr>

      <div className="flex justify-between items-center mt-3">
        <p
          className="cursor-pointer font-itc-franklin"
          onClick={toggleOthersList}
        >
          Other Assets
        </p>
        <button
          onClick={toggleOthersList}
          className="text-lg font-bold focus:outline-none"
        >
          {isOthersExpanded ? "-" : "+"}
        </button>
      </div>

      {isOthersExpanded && (
        <List>
          {OTHER.map((type, index) => (
            <ListItem
              className="p-0 cursor-pointer"
              key={index}
              onClick={() => handleTypeClick(type.value)}
            >
              <Typography
                color="blue-gray"
                className="font-itc-franklin px-3 py-2"
              >
                {type.label}
              </Typography>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
}
