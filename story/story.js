const parser = new DOMParser();

async function initMap() {
  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
    "marker",
  );
  
  const map = new Map(document.getElementById("map"), {
    center: { lat: 45.945, lng: -83.985 },
    zoom: 6,
    mapId: "4504f8b37365c3d0",
  });

//house 1 dad apt
  const house1 = document.createElement('div');
    house1.innerHTML = '<i class="fa fa-house fa-lg"></i>';
  const dadaptpin = new PinElement({
      glyph: house1,
      glyphColor: '#000000',
      background: '#3386FF',
      borderColor: '#0068FF',
  });
  const dadaptmark = new AdvancedMarkerElement({
      map,
      position: { lat: 46.421, lng: -84.05 },
      content: dadaptpin.element,
      title: 'New Hamburg Apartment'
  });

//house 2 dad th
  const house2 = document.createElement('div');
    house2.innerHTML = '<i class="fa fa-house fa-lg"></i>';
  const dadthpin = new PinElement({
      glyph: house2,
      glyphColor: '#000000',
      background: '#3386FF',
      borderColor: '#0068FF',
  });
  const dadthmark = new AdvancedMarkerElement({
      map,
      position: { lat: 46.425, lng: -84.06 },
      content: dadthpin.element,
      title: 'Cambridge Townhouse'
  });

//house 3 dad house
  const house3 = document.createElement('div');
    house3.innerHTML = '<i class="fa fa-house fa-lg"></i>';
  const dadhopin = new PinElement({
      glyph: house3,
      glyphColor: '#000000',
      background: '#3386FF',
      borderColor: '#0068FF',
  });
  const dadhomark = new AdvancedMarkerElement({
      map,
      position: { lat: 46.428, lng: -84.07 },
      content: dadhopin.element,
      title: 'Cambridge House'
  });
  
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
