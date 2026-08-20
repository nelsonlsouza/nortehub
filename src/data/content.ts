import type { CoworkingSpace, Event, Plan, WorkType } from "@/types";
export const benefits = ["Internet rápida","Salas equipadas","Café à vontade","Comunidade","Localização","Ambiente climatizado"];
export const workTypes:{id:WorkType;label:string}[] = [{id:"recommended",label:"Recomendado"},{id:"focus",label:"Foco"},{id:"meeting",label:"Reunião"},{id:"events",label:"Eventos"},{id:"team",label:"Equipe"}];
export const spaces:CoworkingSpace[] = [
  {id:"shared",name:"Estação compartilhada",image:"/images/workspace.jpg",price:"A partir de R$ 39/dia",categories:["recommended","focus"]},
  {id:"private",name:"Sala privativa",image:"/images/private-room.jpg",price:"A partir de R$ 120/dia",categories:["recommended","focus","team"]},
  {id:"lounge",name:"Lounge",image:"/images/lounge.jpg",price:"A partir de R$ 25/dia",categories:["recommended","events"]},
  {id:"meeting",name:"Sala de reunião",image:"/images/meeting-room.jpg",price:"A partir de R$ 80/hora",categories:["recommended","meeting","team"]},
];
export const plans:Plan[] = [
  {name:"Day Pass",price:"R$ 39",unit:"/dia",description:"Liberdade para usar o hub quando precisar.",features:["Áreas comuns","Internet rápida","Café à vontade","Ambiente climatizado"]},
  {name:"Flex",price:"R$ 299",unit:"/mês",description:"Para uma rotina híbrida, com estrutura sempre por perto.",features:["Estações compartilhadas","Benefício em salas","Comunidade","Eventos"],featured:true},
  {name:"Sala Privativa",price:"R$ 1.290",unit:"/mês",description:"Privacidade e estrutura para a sua equipe.",features:["Ambiente exclusivo","Mobiliário completo","Internet dedicada","Sala climatizada"]},
];
export const events:Event[] = [
  {day:"24",month:"MAI",name:"Dev Meetup Manaus",category:"Tecnologia",image:"/images/event-01.jpg"},{day:"31",month:"MAI",name:"Board Games Night",category:"Comunidade",image:"/images/event-02.jpg"},
  {day:"07",month:"JUN",name:"Creator Talks",category:"Criatividade",image:"/images/event-03.jpg"},{day:"14",month:"JUN",name:"Workshop de IA",category:"Aprendizado",image:"/images/workspace.jpg"},
];
export const faqs = [
  {question:"Preciso de contrato ou fidelidade?",answer:"Não para o Day Pass. Nos planos mensais, as condições são apresentadas com clareza antes da contratação."},
  {question:"Como funciona o Day Pass?",answer:"Você reserva o dia, chega no horário combinado e usa as áreas compartilhadas e benefícios incluídos."},
  {question:"Posso reservar salas?",answer:"Sim. Salas de reunião podem ser reservadas por hora, conforme disponibilidade."},
  {question:"Há estacionamento?",answer:"A disponibilidade e as opções próximas serão confirmadas durante o agendamento da visita."},
];
