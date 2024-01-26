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
      background: '#C4E4FE',
      borderColor: '#0068FF',
  });
  const dadaptmark = new AdvancedMarkerElement({
      map,
      position: { lat: 43.3731308123411, lng: -80.70833899320702 },
      content: dadaptpin.element,
      title: 'New Hamburg Apartment'
  });

//house 2 dad th
  const house2 = document.createElement('div');
    house2.innerHTML = '<i class="fa fa-house fa-lg"></i>';
  const dadthpin = new PinElement({
      glyph: house2,
      glyphColor: '#000000',
      background: '#8BC8FC',
      borderColor: '#0068FF',
  });
  const dadthmark = new AdvancedMarkerElement({
      map,
      position: { lat: 43.37983156662524, lng: -80.31598643220795 },
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
      position: { lat: 43.3689365796812, lng: -80.31341177216763 },
      content: dadhopin.element,
      title: 'Cambridge House'
  });
  

}

initMap();
