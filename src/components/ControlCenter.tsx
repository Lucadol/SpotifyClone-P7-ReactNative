import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { playbackService } from '../../musicPlayerServices'

const ControlCenter = () => {

    const playBackState = usePlaybackState()

    // next button
    const skipToNext = async () => {
        await TrackPlayer.skipToNext()
    }

    // previous button
    const skipToPrevious = async () => {
        await TrackPlayer.skipToPrevious()
    }

    const togglePlayback = async (playback: State) => {
        const currentTrack = await TrackPlayer.getCurrentTrack()

        if (currentTrack !== null) {
            if (playback === State.Paused || playback === State.Ready) {
                await TrackPlayer.play()
            } else {
                await TrackPlayer.pause()
            }
        }
    }

  return (
    <View style={styles.container}>
        <Pressable onPress={skipToPrevious}>
            <Icon name="skip-previous" size={40} style={styles.icon} />
        </Pressable>
        <Pressable onPress={() => togglePlayback(playBackState)}>
            <Icon
            name={playBackState === State.Playing ? 'pause' : 'play-arrow'}
            size={40}
            style={styles.icon}
            />
        </Pressable>
        <Pressable onPress={skipToNext}>
            <Icon name="skip-next" size={40} style={styles.icon} />
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 56,
    
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
      },
      icon: {
        color: '#FFFFFF',
      },
      playButton: {
        marginHorizontal: 24,
      },
});

export default ControlCenter