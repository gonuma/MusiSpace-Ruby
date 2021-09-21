songs = Song.create([
    {
        band: "Nirvana",
        title: "Smells Like Teen Spirit",
        url: "hTWKbfoikeg",
        img_url: "hTWKbfoikeg"
    },
    {
        band: "Pink Floyd",
        title: "Dogs",
        url: "4QA30qkRYy8",
        img_url: "4QA30qkRYy8"
    },
    {
        band: "Pink Floyd",
        title: "Atom Heart Mother",
        url: "uUHb3cBvWMY",
        img_url: "Fku7hi5kI-c"
    }
])

comments = Comment.create([
    {
        body: "This song is amazing!",
        song: songs.first
    },
    {
        body: "RIP",
        song: songs.first
    },
    {
        body: "Easily their best song",
        song: songs.first
    },
    {
        body: "This song's so trippy",
        song: songs.last
    }
])