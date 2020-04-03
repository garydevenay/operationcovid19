// This currently defiines a dark blue style of the map.
const circle_style = { 
  strokeWeight: 0, 
  fillColor: "#FF4D84", 
  fillOpacity: 0.3 
}

const death_style = {
  strokeWeight: 0, 
  fillColor: "#000000", 
  fillOpacity: 1
}

const recovered_style = {
  strokeWeight: 0, 
  fillColor: "#07C7F2", 
  fillOpacity: 0.7
}

const self_style = {
  strokeWeight: 0, 
  fillColor: "#0ED8D8", 
  fillOpacity: 0.3
}

const map_style = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#145C8F"
      }
    ]
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#145C8F"
      }
    ]
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#145C8F"
      }
    ]
  },
  {
    featureType: "administrative.country",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#145C8F"
      }
    ]
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#145C8F"
      }
    ]
  },
  {
    featureType: "administrative.province",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#145C8F"
      }
    ]
  },
  {
    featureType: "landscape.man_made",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#145C8F"
      }
    ]
  },
  {
    featureType: "landscape.natural",
    elementType: "geometry",
    stylers: [
      {
        color: "#145C8F"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#145C8F"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#145C8F"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#145C8F"
      }
    ]
  },
  {
    featureType: "poi.business",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#145C8F"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#145C8F"
      }
    ]
  },
  {
    featureType: "road",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#145C8F"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#145C8F"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#145C8F"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#145C8F"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#145C8F"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#145C8F"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#145C8F"
      }
    ]
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#145C8F"
      }
    ]
  },
  {
    featureType: "transit",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#145C8F"
      }
    ]
  },
  {
    featureType: "transit.line",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#145C8F"
      }
    ]
  },
  {
    featureType: "transit.station",
    elementType: "geometry",
    stylers: [
      {
        color: "#145C8F"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#144673"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#144673"
      }
    ]
  }
];

export { circle_style, map_style, death_style, recovered_style, self_style };