import TrackPlayer, { RepeatMode } from 'react-native-track-player';

import {playlistData} from './src/constants';

export async function setupPlayer() { // This function will be called to setup the player
    let isSetup = false
    try {
        await TrackPlayer.getCurrentTrack()
        isSetup = true
    } catch (error) {
        await TrackPlayer.setupPlayer()
        isSetup = true
    } finally {
        return isSetup
    }
}

export async function addTrack() {
    await TrackPlayer.add(playlistData) // Add the tracks to the queue
    await TrackPlayer.setRepeatMode(RepeatMode.Queue) // Repeat the whole playlist
}

export async function playbackService () { // This function will be called to start the player
    TrackPlayer.addEventListener(Event.RemotePause, () => {
        TrackPlayer.pause()
    })

    TrackPlayer.addEventListener(Event.RemotePlay, () => {
        TrackPlayer.play()
    })

    TrackPlayer.addEventListener(Event.RemoteNext, () => {
        TrackPlayer.skipToNext()
    })

    TrackPlayer.addEventListener(Event.RemotePrevious, () => {
        TrackPlayer.skipToPrevious()
    })
}