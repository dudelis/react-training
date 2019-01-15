import {combineReducers} from 'redux';

const songsReducer = () =>{
    return [
        {title: 'NoScrubs', duration: '4:05'},
        {title: 'Macarena', duration: '3:15'},
        {title: 'All Star', duration: '2:05'},
        {title: 'I want it that way', duration: '5:45'}
    ];
}

const defaultSelectedSong = {
    title: '',
    duration: ''
}

const selectedSongReducer = (selectedSong = defaultSelectedSong, action) => {
    if (action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers ({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});