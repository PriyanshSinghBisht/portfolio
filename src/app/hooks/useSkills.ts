import {GrReactjs}  from 'react-icons/gr';
import {TbBrandNextjs} from 'react-icons/tb';
import {TiHtml5} from 'react-icons/ti';
import {DiCss3} from 'react-icons/di';
import {SiTailwindcss} from 'react-icons/si'
import {TbBrandJavascript, TbBrandPython, TbBrandCpp} from 'react-icons/tb';
import SkillCard from '../components/SkillCard';

const useSkills = [
    {
       name: "html",
       Icon: TiHtml5 ,
    },
    {
        name: "css",
        Icon: DiCss3,
     },
     {
        name: "javascript",
        Icon: TbBrandJavascript ,
     },
     {
        name: "tailwind",
        Icon: SiTailwindcss,
     },
     {
        name: "reactjs",
        Icon: GrReactjs,
     },
     {
        name: "nextjs",
        Icon: TbBrandNextjs,
     },
     {
        name: "cpp",
        Icon: TbBrandCpp,
     },
     {
        name: 'python',
        Icon: TbBrandPython,
     }
     
];

export default useSkills