import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export function About() {
  return (
    <section id="About" className='sm:w-full md:w-10/12 flex flex-col items-center'>
      <h2 className='font-serif font-semibold my-6 text-3xl border-b-2 border-royal-blue text-center'>Sobre Mim</h2>
      <Timeline>
        <TimelineItem className='my-4'>
          <TimelineOppositeContent className='!flex-none' color={'secondary'}>
          <p className='font-bold'>2023</p>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color='secondary' />
            <TimelineConnector/>
          </TimelineSeparator>
          <TimelineContent sx={{
            textAlign: 'justify',
            fontWeight: 'medium'
          }}>
            O ano de 2023 foi um marco crucial na minha jornada. <strong>Concluí meu curso técnico</strong>, aplicando os conhecimentos adquiridos no <strong>desenvolvimento de um algoritmo inovador</strong>, capaz de <strong>criar treinos personalizados com base nas informações dos usuários</strong>. Além disso, destaco a <strong>criação de um site para uma campanha de mamografia</strong> ambos utilizando PHP e MySQL, juntamente com git para trabalhar em time. E logo depois o <strong>desenvolvimento de um projeto de gerenciamento de tarefas</strong>, este utilizando Next.js, NextAuth e MongoDB.
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className='my-4'>
          <TimelineOppositeContent className='!flex-none' color="secondary">
          <p className='font-bold'>2022</p>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color='secondary' />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{
            textAlign: 'justify',
            fontWeight: 'medium'
          }}>
            Em 2022, <strong>ingressei em um curso técnico</strong> que expandiu meu horizonte em TI. Além de aprofundar meus conhecimentos em React e Next por conta, fui introduzido a novas áreas pelo curso, como <strong>Java, design e marketing</strong>. Esse ano foi crucial para fortalecer minha base de conhecimentos e ampliar minha visão sobre as possibilidades dentro da área de tecnologia.
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className='my-4'>
          <TimelineOppositeContent className='!flex-none' color="secondary">
            <p className='ml-1 font-bold'>2021</p>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color='secondary'/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{
            textAlign: 'justify',
            fontWeight: 'medium'
          }}>
            O ano de 2021 foi marcado por um aprimoramento significativo nas minhas habilidades, impulsionado pelo programa da Rocketseat. Aprofundei-me no universo <strong>React e Next</strong>, explorando também ferramentas como <strong>SASS</strong>, <strong>Styled-components</strong> e <strong>Chakra-UI</strong>. Esta fase consolidou meu entendimento de desenvolvimento front-end e abriu portas para desafios mais complexos.
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className='my-4'>
          <TimelineOppositeContent className='!flex-none' color="secondary">
            <p className='font-bold'>2020</p>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color='secondary'/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{
            textAlign: 'justify',
            fontWeight: 'medium'
          }}>
            Em 2020, iniciei minha jornada no <strong>desenvolvimento web</strong>, mergulhando nos fundamentos essenciais, como <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> e <strong>Git</strong>. Neste ano, concentrei-me no desenvolvimento de <strong>landing pages</strong> e projetos mais simples, estabelecendo as bases para minha carreira.
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </section>
  );
}