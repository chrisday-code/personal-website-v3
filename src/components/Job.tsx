import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import React, { useState } from 'react';
import { JobInterface} from '../interfaces';
import { useTheme } from '@mui/material/styles';

interface SkillType {
    name: string
}

export const Skill = ({name}: SkillType)=> {
    return ( 
        <Box sx = {{backgroundColor: '#351C27', padding: '0.1em 0.5em 0.1em 0.5em', borderRadius: '1em' }}>
            <Typography variant='caption' color={'#D7CFDD'}>{name}</Typography>
        </Box>
    )
}

//#1A3820 hover colour

export const Job = ({position, company, start, description, end, link, skills}: JobInterface) => {
    const [hovered, setHovered] = useState(false);
    const theme = useTheme();

    const renderSkills = (skills: Array<string>)=> {
        return skills.map((skill:string, index) => {
            return <Skill key={index} name={skill}/>
        })
    }

    return ( 
        <Box onMouseEnter={()=> {setHovered(true)}}
             onMouseLeave={()=> {setHovered(false)}}
             sx={{display: 'flex', 
             flexDirection: 'row',
             backgroundColor: !hovered?theme.palette.background.basic:theme.palette.background.hero,
             padding: '1em',
             margin: '0.5em',
             borderRadius: '0.5em',
             cursor: 'pointer',
             transition: '0.2s ease-in-out',
             width: {xs: '100%', sm: '95%', md: '90%'}
            }} >
            {/* <Box width={'30%'}>
                <Typography variant='body2'> {start} - {end}</Typography>
            </Box> */}
            <Box display={'flex'} flexDirection={'column'} width={'100%'}>
                <Box sx={{display: 'flex', 
                        flexDirection: {xs: 'column', md:  'row-reverse'},
                        alignItems: {xs: 'flex-start', md: 'center'},
                        justifyContent: 'space-between',
                        width: '100%'}}>
                    <Typography variant = 'body2'
                        sx={{margin: 0 }}>
                    {start} — {end}
                    </Typography>
                    <Typography variant = 'h6'
                                sx={{margin: 0 }}>
                    {position}
                    </Typography>
                </Box>
                
                <Typography variant = 'h6'
                sx={{margin: 0 }} >
                    {company}
                </Typography>
                <Typography variant='body2' paddingBottom = '1em' sx={{color: 'white'}}>
                    {description}
                </Typography>
                <Box display={'flex'} flexDirection={'row'} justifyItems={'flex-start'} flexWrap={'wrap'} gap={'0.2em'}>
                    {renderSkills(skills)}
                </Box>
            </Box>

        </Box>
    )
}