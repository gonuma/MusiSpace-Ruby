songs = Song.create([
    {
        band: "Nirvana",
        title: "Smells Like Teen Spirit",
        url: "hTWKbfoikeg",
        img_url: "hTWKbfoikeg",
        poster: "Wasabi"
    },
    {
        band: "Pink Floyd",
        title: "Dogs",
        url: "4QA30qkRYy8",
        img_url: "4QA30qkRYy8",
        poster: "Riku"
    },
    {
        band: "Pink Floyd",
        title: "Atom Heart Mother",
        url: "uUHb3cBvWMY",
        img_url: "Fku7hi5kI-c",
        poster: "Riku"
    }
])

comments = Comment.create([
    {
        body: "This song is amazing!",
        song: songs.first,
        commenter: "Greggy"
    },
    {
        body: "RIP",
        song: songs.first,
        commenter: "Riku"
    },
    {
        body: "Easily their best song",
        song: songs.first,
        commenter: "Wasabi"
    },
    {
        body: "This song's so trippy",
        song: songs.last,
        commenter: "Yo Mama"
    }
])