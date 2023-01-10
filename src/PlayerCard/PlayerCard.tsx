import * as React from 'react';
import {useContext, useState} from 'react';

import {Box, IconButton, Slider, Stack, Typography} from '@mui/material';

import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

import {AlbumImage} from './styles';
import {Controls} from './Controls/Controls';
import {ColorModeContext} from '../styles/theme';
import {MySwitch} from './Switch/MySwitch'


const PlayerCard = () => {
    const colorMode = useContext(ColorModeContext)
    const duration = 260; // seconds
    const [position, setPosition] = useState(0);
    const [isLiked, setLiked] = useState<boolean | null>(null);
    const formatDuration = (value: number) => {
        const minute = Math.floor(value / 60);
        const secondLeft = value - minute * 60;
        return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
    };


    return (
        <Stack spacing={5} sx={{alignItems: "center", mt: 10}}>
            <MySwitch onClick={colorMode.toggleColorMode}/>
            <AlbumImage src="https://via.ritzau.dk/data/images/00180/311cc18f-3372-4bbd-b50f-d4a253bfb755-w_960.jpg"/>
            <Stack sx={{alignItems: "center"}}>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "242px",
                }}>
                    <IconButton
                        color="secondary"
                        component="label"
                        onClick={() => {
                            setLiked(isLiked === false ? null : false)
                        }}
                    >
                        {isLiked === false ? <ThumbDownIcon/> : <ThumbDownOffAltIcon/>}
                    </IconButton>
                    <Typography variant="h6" component="h5">Maniac</Typography>
                    <IconButton
                        color="secondary"
                        component="label"
                        onClick={() => {
                            setLiked(isLiked ? null : true);
                        }}
                    >
                        {isLiked === true ? <ThumbUpIcon/> : <ThumbUpOffAltIcon/>}
                    </IconButton>
                </Box>
                <Typography sx={{opacity: "50%"}} component="span">
                    Michael Sambello
                </Typography>
                <Stack sx={{width: "408px", mt: 3}}>
                    <Slider
                        aria-label="Custom marks"
                        defaultValue={30}
                        value={position}
                        min={0}
                        step={1}
                        max={duration}
                        onChange={(_, value: number | number[]) => !Array.isArray(value) && setPosition(value)}
                    />
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "12px",
                        mt: 1,
                    }}>
                        <span>{formatDuration(position)}</span>
                        <span>{formatDuration(duration)}</span>
                    </Box>
                </Stack>
                <Controls/>
            </Stack>
        </Stack>
    );
};

export default PlayerCard;
