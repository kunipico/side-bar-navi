import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

export const SidebarData = [
  {
    title: "ホーム",
    icon:<HomeIcon />,
    link: "/home"
  },
  {
    title: "メール",
    icon:<EmailIcon />,
    link: "/mail"
  },
  {
    title: "アナリティクス",
    icon:<LeaderboardIcon />,
    link: "/analytics"
  },
]
