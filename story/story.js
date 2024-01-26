const parser = new DOMParser();

async function initMap() {
  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
    "marker",
  );
  
  const map = new Map(document.getElementById("map"), {
    center: { lat: 45.945, lng: -83.985 },
    zoom: 7,
    mapId: "4504f8b37365c3d0",
  });

    // A marker using a Font Awesome icon for the glyph.
  const icon = document.createElement("div");
  
  icon.innerHTML = '<i class="fa fa-house"></i>';
 
  //
  const faPin = new PinElement({
    glyph: icon,
    glyphColor: "#ff8300",
    background: "#FFD514",
    borderColor: "#ff8300",
  });
  const faMarker = new AdvancedMarkerElement({
    map,
    position: { lat: 45.422, lng: -83.05 },
    content: faPin.element,
    title: "A marker using a FontAwesome icon for the glyph.",
  });
  //
  
  // Each PinElement is paired with a MarkerView to demonstrate setting each parameter.
  // Default marker with title text (no PinElement).
  const markerViewWithText = new AdvancedMarkerElement({
    map,
    position: { lat: 45.419, lng: -83.03 },
    title: "Title text for the marker at lat: 37.419, lng: -122.03",
  });
  
  // Adjust the scale.
  const pinScaled = new PinElement({
    scale: 1.5,
  });
  const markerViewScaled = new AdvancedMarkerElement({
    map,
    position: { lat: 45.419, lng: -83.02 },
    content: pinScaled.element,
  });
  
  // Change the background color.
  const pinBackground = new PinElement({
    background: "#FBBC04",
  });
  const markerViewBackground = new AdvancedMarkerElement({
    map,
    position: { lat: 45.419, lng: -83.01 },
    content: pinBackground.element,
  });
  
  // Change the border color.
  const pinBorder = new PinElement({
    borderColor: "#137333",
  });
  const markerViewBorder = new AdvancedMarkerElement({
    map,
    position: { lat: 45.415, lng: -83.03 },
    content: pinBorder.element,
  });
  
  // Change the glyph color.
  const pinGlyph = new PinElement({
    glyphColor: "white",
  });
  const markerViewGlyph = new AdvancedMarkerElement({
    map,
    position: { lat: 45.415, lng: -83.02 },
    content: pinGlyph.element,
  });
  
  // Hide the glyph.
  const pinNoGlyph = new PinElement({
    glyph: "",
  });
  const markerViewNoGlyph = new AdvancedMarkerElement({
    map,
    position: { lat: 45.415, lng: -83.01 },
    content: pinNoGlyph.element,
  });
}

initMap();
