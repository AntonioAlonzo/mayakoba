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
    { label: "Aerial", value: "aerial" },
    { label: "Meeting Spaces", value: "meeting" },
    { label: "Public Spaces", value: "public" },
    {
      label: "Residences",
      value: "residences",
      subcategories: [
        { label: "2 PH Residence 4 Bed", value: "2ph" },
        { label: "802 Ground Floor Residence", value: "802" },
        { label: "912 Residence 3 Bed", value: "912" },
        { label: "931 Resicence 3 Bedroom", value: "931" },
      ],
    },
    { label: "Rooms", value: "rooms" },
    { label: "SPA", value: "spa" },
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
  const [expandedSubcategories, setExpandedSubcategories] = useState({});

  function handleTypeClick(type) {
    onApplyFilterClick(type);
  }

  function togglePhotosList() {
    setIsPhotosExpanded(!isPhotosExpanded);
  }

  function toggleOthersList() {
    setIsOthersExpanded(!isOthersExpanded);
  }

  function toggleSubcategories(index) {
    setExpandedSubcategories((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
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
            <div key={index}>
              <ListItem
                className="p-0 cursor-pointer"
                onClick={() => handleTypeClick(type.value)}
              >
                <Typography
                  color="blue-gray"
                  className="font-itc-franklin px-3 py-2"
                >
                  {type.label}
                </Typography>
                {type.subcategories && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSubcategories(index);
                    }}
                    className="text-lg font-bold focus:outline-none"
                  >
                    {expandedSubcategories[index] ? "-" : "+"}
                  </button>
                )}
              </ListItem>
              {type.subcategories && expandedSubcategories[index] && (
                <List className="pl-6">
                  {type.subcategories.map((subcategory, subIndex) => (
                    <ListItem
                      className="p-0 cursor-pointer"
                      key={subIndex}
                      onClick={() => handleTypeClick(subcategory.value)}
                    >
                      <Typography
                        color="blue-gray"
                        className="font-itc-franklin px-3 py-2"
                      >
                        {subcategory.label}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              )}
            </div>
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
