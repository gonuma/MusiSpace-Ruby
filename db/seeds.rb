songs = Song.create([
    {
        band: "Nirvana",
        song: "Smells Like Teen Spirit",
        url: "hTWKbfoikeg"
    }
])

comments = Comment.create([
    {
        body: "This song is amazing!",
        song: songs.first
    }
])