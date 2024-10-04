"use client";

import React, { useState } from "react";
import {
  Checkbox,
  Card,
  Button,
  List,
  ListItem,
  Typography,
} from "@material-tailwind/react";

export default function Filter({ onApplyFilterClick }) {
  const COMBINED = [
    { label: "Factsheet", value: "factsheet" },
    { label: "Offers", value: "offers" },
    { label: "Brochure", value: "brochure" },
    { label: "Resort Map", value: "resort" },
    { label: "Daily Program", value: "daily" },
    { label: "Events Calendar", value: "events" },
    { label: "Video", value: "video" },
    { label: "Virtual Tour", value: "virtual" },
    {
      label: "Photos",
      value: "photos",
      subcategories: [
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
            { label: "931 Residence 3 Bedroom", value: "931" },
          ],
        },
        { label: "Rooms", value: "rooms" },
        { label: "SPA", value: "spa" },
      ],
    },
    { label: "Logo", value: "logo" },
    { label: "Weddings", value: "weddings" },
    { label: "Banquet Kit", value: "banquet" },
    { label: "Reservations", value: "reservations" },
  ];

  const [expandedSubcategories, setExpandedSubcategories] = useState({});

  function handleTypeClick(type) {
    onApplyFilterClick(type);
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

      <List>
        {COMBINED.map((type, index) => (
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
              <List>
                {type.subcategories.map((subcategory, subIndex) => (
                  <div key={subIndex}>
                    <ListItem
                      className="p-0 cursor-pointer"
                      onClick={() => handleTypeClick(subcategory.value)}
                    >
                      <Typography
                        color="blue-gray"
                        className="font-itc-franklin px-3 py-2"
                      >
                        {subcategory.label}
                      </Typography>
                      {subcategory.subcategories && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleSubcategories(`${index}-${subIndex}`);
                          }}
                          className="text-lg font-bold focus:outline-none"
                        >
                          {expandedSubcategories[`${index}-${subIndex}`]
                            ? "-"
                            : "+"}
                        </button>
                      )}
                    </ListItem>
                    {subcategory.subcategories &&
                      expandedSubcategories[`${index}-${subIndex}`] && (
                        <List>
                          {subcategory.subcategories.map(
                            (nestedSub, nestedIndex) => (
                              <ListItem
                                className="p-0 cursor-pointer"
                                key={nestedIndex}
                                onClick={() => handleTypeClick(nestedSub.value)}
                              >
                                <Typography
                                  color="blue-gray"
                                  className="font-itc-franklin px-3 py-2"
                                >
                                  {nestedSub.label}
                                </Typography>
                              </ListItem>
                            )
                          )}
                        </List>
                      )}
                  </div>
                ))}
              </List>
            )}
          </div>
        ))}
      </List>
    </div>
  );
}
