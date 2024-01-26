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
    mapTypeId: SATELLITE,
    mapId: "4504f8b37365c3d0",
  });

//house 1 dad apt
  const house1 = document.createElement('div');
    house1.innerHTML = '<i class="fa fa-house fa-lg"></i>';
  const dadaptpin = new PinElement({
      glyph: house1,
      glyphColor: '#000000',
      background: '#9AC3FF',
      borderColor: '#9AC3FF',
  });
  const dadaptmark = new AdvancedMarkerElement({
      map,
      position: { lat: 43.3731308123411, lng: -80.70833899320702 },
      content: dadaptpin.element,
      title: 'New Hamburg Apartment',
  });

//house 2 dad th
  const house2 = document.createElement('div');
    house2.innerHTML = '<i class="fa fa-house fa-lg"></i>';
  const dadthpin = new PinElement({
      glyph: house2,
      glyphColor: '#000000',
      background: '#74ADFF',
      borderColor: '#74ADFF',
  });
  const dadthmark = new AdvancedMarkerElement({
      map,
      position: { lat: 43.37983156662524, lng: -80.31598643220795 },
      content: dadthpin.element,
      title: 'Cambridge Townhouse',
  });

//house 3 dad house
  const house3 = document.createElement('div');
    house3.innerHTML = '<i class="fa fa-house fa-lg"></i>';
  const dadhopin = new PinElement({
      glyph: house3,
      glyphColor: '#000000',
      background: '#3386FF',
      borderColor: '#3386FF',
  });
  const dadhomark = new AdvancedMarkerElement({
      map,
      position: { lat: 43.3689365796812, lng: -80.31341177216763 },
      content: dadhopin.element,
      title: 'Cambridge House',
  });
  
//house 1 mom kitchener
  const house4 = document.createElement('div');
    house4.innerHTML = '<i class="fa fa-house fa-lg"></i>';
  const momkipin = new PinElement({
      glyph: house4,
      glyphColor: '#000000',
      background: '#FFBEE5',
      borderColor: '#FFBEE5',
  });
  const momkimark = new AdvancedMarkerElement({
      map,
      position: { lat: 43.44859031899011, lng: -80.51124452572624 },
      content: momkipin.element,
      title: 'Cambridge House',
  });
  
//house 2 mom farm
  const house5 = document.createElement('div');
    house5.innerHTML = '<i class="fa fa-house fa-lg"></i>';
  const momfapin = new PinElement({
      glyph: house5,
      glyphColor: '#000000',
      background: '#FFA9DC',
      borderColor: '#FFA9DC',
  });
  const momfamark = new AdvancedMarkerElement({
      map,
      position: { lat: 43.39363559624764, lng: -80.63259472255798 },
      content: momfapin.element,
      title: 'Cambridge House',
  });
  
//house 3 mom baden
  const house6 = document.createElement('div');
    house6.innerHTML = '<i class="fa fa-house fa-lg"></i>';
  const mombapin = new PinElement({
      glyph: house6,
      glyphColor: '#000000',
      background: '#FF9AD6',
      borderColor: '#FF9AD6',
  });
  const mombamark = new AdvancedMarkerElement({
      map,
      position: { lat: 43.40253811823013, lng: -80.67594929326613 },
      content: mombapin.element,
      title: 'Cambridge House',
  });
  
//house 4 mom nhhouse
  const house7 = document.createElement('div');
    house7.innerHTML = '<i class="fa fa-house fa-lg"></i>';
  const momhopin = new PinElement({
      glyph: house7,
      glyphColor: '#000000',
      background: '#FF86CF',
      borderColor: '#FF86CF',
  });
  const momhomark = new AdvancedMarkerElement({
      map,
      position: { lat: 43.37463735969032, lng: -80.70833516998648 },
      content: momhopin.element,
      title: 'Cambridge House',
  });
  
//house 5 mom apt
  const house8 = document.createElement('div');
    house8.innerHTML = '<i class="fa fa-house fa-lg"></i>';
  const momaptpin = new PinElement({
      glyph: house8,
      glyphColor: '#000000',
      background: '#FF86CF',
      borderColor: '#FF86CF',
  });
  const momaptmark = new AdvancedMarkerElement({
      map,
      position: { lat: 43.37797224539896, lng: -80.70935557291084 },
      content: momaptpin.element,
      title: 'Cambridge House',
  });
  
//house 1 both exeter
  const house9 = document.createElement('div');
    house9.innerHTML = '<i class="fa fa-house fa-lg"></i>';
  const bothexpin = new PinElement({
      glyph: house9,
      glyphColor: '#000000',
      background: '#C6B4FF',
      borderColor: '#C6B4FF',
  });
  const bothexmark = new AdvancedMarkerElement({
      map,
      position: { lat: 43.34724767951117, lng: -81.48057391951164 },
      content: bothexpin.element,
      title: 'Cambridge House',
  });
  
//house 2 both baden
  const house10 = document.createElement('div');
    house10.innerHTML = '<i class="fa fa-house fa-lg"></i>';
  const bothbapin = new PinElement({
      glyph: house10,
      glyphColor: '#000000',
      background: '#A78BFF',
      borderColor: '#A78BFF',
  });
  const bothbamark = new AdvancedMarkerElement({
      map,
      position: { lat: 43.40004189368527, lng: -80.66076127931625 },
      content: bothbapin.element,
      title: 'Cambridge House',
  });
  
//house 1 my barrieres
  const house11 = document.createElement('div');
    house11.innerHTML = '<i class="fa fa-house fa-lg"></i>';
  const mybarespin = new PinElement({
      glyph: house11,
      glyphColor: '#000000',
      background: '#FFEDB4',
      borderColor: '#FFEDB4',
  });
  const mybaresmark = new AdvancedMarkerElement({
      map,
      position: { lat: 44.41301197637368, lng: -79.66579502002776 },
      content: mybarespin.element,
      title: 'Cambridge House',
  });
  
//house 2 my barriegreen
  const house12 = document.createElement('div');
    house12.innerHTML = '<i class="fa fa-house fa-lg"></i>';
  const mybagrpin = new PinElement({
      glyph: house12,
      glyphColor: '#000000',
      background: '#FFE48F',
      borderColor: '#FFE48F',
  });
  const mybagrmark = new AdvancedMarkerElement({
      map,
      position: { lat: 44.4115991090519, lng: -79.67583273132199 },
      content: mybagrpin.element,
      title: 'Cambridge House',
  });
  
//house 3 my lindsayres
  const house13 = document.createElement('div');
    house13.innerHTML = '<i class="fa fa-house fa-lg"></i>';
  const mylinrespin = new PinElement({
      glyph: house13,
      glyphColor: '#000000',
      background: '#FFDB69',
      borderColor: '#FFDB69',
  });
  const mylinresmark = new AdvancedMarkerElement({
      map,
      position: { lat: 44.33929082808649, lng: -78.74441382397843 },
      content: mylinrespin.element,
      title: 'Cambridge House',
  });
  
//house 4 my lindsayth
  const house14 = document.createElement('div');
    house14.innerHTML = '<i class="fa fa-house fa-lg"></i>';
  const mylinthpin = new PinElement({
      glyph: house14,
      glyphColor: '#000000',
      background: '#FFD349',
      borderColor: '#FFD349',
  });
  const mylinthmark = new AdvancedMarkerElement({
      map,
      position: { lat: 44.34622235383005, lng: -78.7309406764728 },
      content: mylinthpin.element,
      title: 'Cambridge House',
  });
  
//house 5 my lindsaysketch
  const house15 = document.createElement('div');
    house15.innerHTML = '<i class="fa fa-house fa-lg"></i>';
  const myliskpin = new PinElement({
      glyph: house15,
      glyphColor: '#000000',
      background: '#FFC925',
      borderColor: '#FFC925',
  });
  const myliskmark = new AdvancedMarkerElement({
      map,
      position: { lat: 44.34798023228108, lng: -78.74296234435508 },
      content: myliskpin.element,
      title: 'Cambridge House',
  });

  //house 6 my thunderbay
  const house16 = document.createElement('div');
    house16.innerHTML = '<i class="fa fa-house fa-lg"></i>';
  const mytbaypin = new PinElement({
      glyph: house16,
      glyphColor: '#000000',
      background: '#FFC000',
      borderColor: '#FFC000',
  });
  const mytbaymark = new AdvancedMarkerElement({
      map,
      position: { lat: 48.44572961499403, lng: -89.24773803201103 },
      content: mytbaypin.element,
      title: 'Cambridge House',
  });

  //house 7 my cavan
  const house17 = document.createElement('div');
    house17.innerHTML = '<i class="fa fa-house fa-lg"></i>';
  const mycavpin = new PinElement({
      glyph: house17,
      glyphColor: '#000000',
      background: '#FFB200',
      borderColor: '#FFB200',
  });
  const mycavmark = new AdvancedMarkerElement({
      map,
      position: { lat: 44.24480633637904, lng: -78.50567666080181 },
      content: mycavpin.element,
      title: 'Cambridge House',
  });

  //house 8 my current
  const house18 = document.createElement('div');
    house18.innerHTML = '<i class="fa fa-house fa-lg"></i>';
  const mycampin = new PinElement({
      glyph: house18,
      glyphColor: '#000000',
      background: '#FFA200',
      borderColor: '#FFA200',
  });
  const mycammark = new AdvancedMarkerElement({
      map,
      position: { lat: 44.35639928229577, lng: -78.74048141671955 },
      content: mycampin.element,
      title: 'Cambridge House',
  });
}

initMap();
