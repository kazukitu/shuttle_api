const express = require('express');
const cors = require('cors');

const app = express();
const port = 7070;

app.use(cors());

app.get('/api/items', (req, res) => {
const products = [
  {
    "name": "PlayStation 5",
    "type": "Console",
    "yearReleased": 2020,
    "priceUSD": 499,
    "imageURL": "playstation5"
  },
  {
    "name": "Xbox Series X",
    "type": "Console",
    "yearReleased": 2020,
    "priceUSD": 499,
    "imageURL": "xbox"
  },
  {
    "name": "Nintendo Switch",
    "type": "Console",
    "yearReleased": 2017,
    "priceUSD": 299,
    "imageURL": "switch_pic"
  },
  {
    "name": "PlayStation 4",
    "type": "Console",
    "yearReleased": 2013,
    "priceUSD": 399,
    "imageURL": "playstation4"
  },
  {
    "name": "Xbox One",
    "type": "Console",
    "yearReleased": 2013,
    "priceUSD": 499,
    "imageURL": "xbox_one"
  },
  {
    "name": "Alienware",
    "type": "PC",
    "yearReleased": 2023,
    "priceUSD": 999,
    "imageURL": "pc"
  },
  {
    "name": "Nintendo 64",
    "type": "Console",
    "yearReleased": 1996,
    "priceUSD": 199,
    "imageURL": "n64"
  },
  {
    "name": "Sega Genesis",
    "type": "Console",
    "yearReleased": 1989,
    "priceUSD": 189,
    "imageURL": "genesis"
  },
  {
    "name": "Super Nintendo Entertainment System",
    "type": "Console",
    "yearReleased": 1990,
    "priceUSD": 199,
    "imageURL": "sfc"
  },
  {
    "name": "PlayStation 2",
    "type": "Console",
    "yearReleased": 2000,
    "priceUSD": 299,
    "imageURL": "playstation2"
  },
  {
    "name": "Xbox 360",
    "type": "Console",
    "yearReleased": 2005,
    "priceUSD": 299,
    "imageURL": "xbox_360"
  },
  {
    "name": "Wii",
    "type": "Console",
    "yearReleased": 2006,
    "priceUSD": 249,
    "imageURL": "wii"
  },
  {
    "name": "Nintendo GameCube",
    "type": "Console",
    "yearReleased": 2001,
    "priceUSD": 199,
    "imageURL": "game_cube"
  },
  {
    "name": "Nintendo Entertainment System",
    "type": "Console",
    "yearReleased": 1985,
    "priceUSD": 199,
    "imageURL": "fc"
  },
  {
    "name": "Sega Dreamcast",
    "type": "Console",
    "yearReleased": 1999,
    "priceUSD": 199,
    "imageURL": "dreamcast"
  },
  {
    "name": "Sony PSP",
    "type": "Portable",
    "yearReleased": 2004,
    "priceUSD": 249,
    "imageURL": "psp"
  },
  {
    "name": "Game Boy Advance",
    "type": "Portable",
    "yearReleased": 2001,
    "priceUSD": 99,
    "imageURL": "gameboy"
  },
  {
    "name": "Atari 2600",
    "type": "Console",
    "yearReleased": 1977,
    "priceUSD": 199,
    "imageURL": "atari"
  },
  {
    "name": "Neo Geo",
    "type": "Console",
    "yearReleased": 1990,
    "priceUSD": 649,
    "imageURL": "neo_geo"
  },
  {
    "name": "Sega Saturn",
    "type": "Console",
    "yearReleased": 1994,
    "priceUSD": 399,
    "imageURL": "saturn"
  }
]


  res.json(products);
});

app.get('/api/shops', (req, res) => {

	 const game_developers = [
    {
      "name": "Nintendo",
      "country": "Japan",
      "details": "Nintendo is a Japanese video game company known for iconic franchises like Mario, Zelda, and Pokémon."
    },
    {
      "name": "Sony Interactive Entertainment",
      "country": "Japan",
      "details": "Sony Interactive Entertainment is a Japanese video game company responsible for PlayStation consoles and games."
    },
    {
      "name": "Microsoft Game Studios",
      "country": "United States",
      "details": "Microsoft Game Studios is an American video game company, known for Xbox and Windows gaming."
    },
    {
      "name": "Electronic Arts (EA)",
      "country": "United States",
      "details": "Electronic Arts (EA) is an American video game company famous for franchises like FIFA and Madden NFL."
    },
    {
      "name": "Activision",
      "country": "United States",
      "details": "Activision is an American video game company known for Call of Duty and Destiny franchises."
    },
    {
      "name": "Ubisoft",
      "country": "France",
      "details": "Ubisoft is a French video game company famous for Assassin's Creed and Far Cry series."
    },
    {
      "name": "Take-Two Interactive",
      "country": "United States",
      "details": "Take-Two Interactive is an American video game company behind Grand Theft Auto and Red Dead Redemption."
    },
    {
      "name": "Bethesda Game Studios",
      "country": "United States",
      "details": "Bethesda Game Studios is an American developer known for The Elder Scrolls and Fallout series."
    },
    {
      "name": "Square Enix",
      "country": "Japan",
      "details": "Square Enix is a Japanese video game developer famous for Final Fantasy and Kingdom Hearts."
    },
    {
      "name": "Capcom",
      "country": "Japan",
      "details": "Capcom is a Japanese video game company known for Resident Evil and Street Fighter series."
    },
    {
      "name": "Bandai Namco Entertainment",
      "country": "Japan",
      "details": "Bandai Namco Entertainment is a Japanese company famous for Tekken and Dragon Ball games."
    },
    {
      "name": "Blizzard Entertainment",
      "country": "United States",
      "details": "Blizzard Entertainment is an American developer known for World of Warcraft and Overwatch."
    },
    {
      "name": "Rockstar Games",
      "country": "United States",
      "details": "Rockstar Games is an American developer behind Grand Theft Auto and Red Dead Redemption series."
    },
    {
      "name": "Valve Corporation",
      "country": "United States",
      "details": "Valve Corporation is an American company known for Steam platform and Half-Life series."
    },
    {
      "name": "CD Projekt Red",
      "country": "Poland",
      "details": "CD Projekt Red is a Polish developer famous for The Witcher and Cyberpunk 2077."
    },
    {
      "name": "Epic Games",
      "country": "United States",
      "details": "Epic Games is an American developer behind Fortnite and Unreal Engine."
    },
    {
      "name": "Sega",
      "country": "Japan",
      "details": "Sega is a Japanese video game company known for Sonic the Hedgehog and Yakuza series."
    },
    {
      "name": "Konami",
      "country": "Japan",
      "details": "Konami is a Japanese video game company famous for Metal Gear Solid and Pro Evolution Soccer."
    },
    {
      "name": "Naughty Dog",
      "country": "United States",
      "details": "Naughty Dog is an American developer known for Uncharted and The Last of Us series."
    },
    {
      "name": "BioWare",
      "country": "Canada",
      "details": "BioWare is a Canadian developer famous for Mass Effect and Dragon Age series."
    }
  ]
  res.json(game_developers);

});


app.get('/api/data', (req, res) => {
  const data = {
    message: 'Hello, world!',
    timestamp: new Date().toISOString(),
  };
  res.json(data);
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

