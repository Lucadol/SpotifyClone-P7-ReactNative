import { Track } from "react-native-track-player";

export const playlistData: Track[] = [
    {
        id: '1',
        title: 'Best Friend',
        artist: '50 Cent',
        album: 'The Massacre',
        url: require('./assets/audio/50 Cent - Best Friend (Official Music Video) ft. Olivia.mp3'),
        artwork:
            'https://lastfm.freetls.fastly.net/i/u/300x300/285df9028d1b880b785fb808a064e0f2.jpg'
    },
    {
        id: '2',
        title: 'L$D',
        artist: 'A$AP Rocky',
        album: 'AT.LONG.LAST.A$AP',
        url: require('./assets/audio/A$AP Rocky - L$D (LOVE x $EX x DREAMS).mp3'),
        artwork:
            'http://pilerats.com/assets/Uploads/ASAP-LSD-VIDEO-STILL.jpg'
    },
    {
        id: '3',
        title: 'Praise The Lord',
        artist: 'A$AP Rocky',
        album: 'TESTING',
        url: require('./assets/audio/A$AP Rocky - Praise The Lord (Da Shine) (Official Audio) ft. Skepta (2).mp3'),
        artwork:
            'https://i1.sndcdn.com/artworks-Tt9vHYM1ezZor7Mx-XGOcGg-t500x500.jpg'
    }
    ];
