import { SERVICE_URL } from 'config';
import api from '../api';

let chatData = [
  {
    id: 1,
    name: 'Bosco Lin',
    thumb: '/img/profile/profile-1.webp',
    last: 'Today 10:40',
    status: 'Online',
    unread: 0,
    messages: [
      {
        text: 'Yo David!',
        time: '17:20',
        type: 'response',
        attachments: [],
      },
      {
        text: 'Howdy?',
        time: '17:20',
        type: 'response',
        attachments: [],
      },
      {
        text: 'Here are the images you have asked for.',
        time: '17:21',
        type: 'response',
        attachments: [],
      },
      {
        text: '',
        time: '17:21',
        type: 'response',
        attachments: ['/img/product/large/product-1.webp', '/img/product/large/product-2.webp'],
      },
      {
        text: 'Nobody exists on purpose. Nobody belongs anywhere. We’re all going to die. Come watch the House of Dragons.',
        time: '17:22',
        type: 'response',
        attachments: [],
      },
      {
        text: 'To live is to risk it all; otherwise you’re just an inert chunk of randomly assembled molecules drifting wherever the universe blows you.',
        time: '17:23',
        type: 'response',
        attachments: [],
      },
      {
        text: 'I’ll tell you how I feel about school, It’s a waste of time. Bunch of people runnin’ around bumpin’ into each other, got a guy up front says, ‘Two plus two,’ and the people in the back say, ‘Four.’ Then the bell rings and they give you a carton of milk and a piece of paper that says you can go take a dump or somethin’. I mean, it’s not a place for smart people, David. I know that’s not a popular opinion, but that’s my two cents on the issue.',
        time: '19:10',
        type: 'message',
        attachments: [],
      },
      {
        text: 'Sometimes science is more art than science.',
        time: '19:11',
        type: 'message',
        attachments: [],
      },
      {
        text: 'Listen, David, I hate to break it to you, but what people call ‘love’ is just a chemical reaction that compels animals to breed.',
        time: '19:13',
        type: 'response',
        attachments: [],
      },
      {
        text: 'Listen, I’m not the nicest guy in the universe, because I’m the smartest, and being nice is something stupid people do to hedge their bets.',
        time: '19:15',
        type: 'response',
        attachments: [],
      },
      {
        text: '',
        time: '19:15',
        type: 'message',
        attachments: ['/img/product/large/product-3.webp'],
      },
      {
        text: 'You gotta do it for our country, David. You gotta put these seeds inside your butt.',
        time: '19:35',
        type: 'message',
        attachments: [],
      },
      {
        text: 'Thanks for the help!',
        time: '21:22',
        type: 'response',
        attachments: [],
      },
      {
        text: 'And I see you soon!',
        time: '21:22',
        type: 'response',
        attachments: [],
      },
      {
        text: 'Bye',
        time: '21:22',
        type: 'response',
        attachments: [],
      },
    ],
  },
  {
    id: 2,
    name: 'Big Brother',
    thumb: '/img/profile/profile-13.webp',
    last: 'Today 15:20',
    status: 'Offline',
    unread: 2,
    messages: [
      {
        text: 'Hi!',
        time: '19:20',
        type: 'response',
        attachments: [],
      },
      {
        text: 'So what if he’s the devil, David? At least the devil has a job. At least he’s active in the community.',
        time: '19:21',
        type: 'response',
        attachments: [],
      },
      {
        text: "I don't know what should I do but I wouldn't mind eating some poops 💩.",
        time: '19:21',
        type: 'response',
        attachments: [],
      },
      {
        text: 'So I have an emo streak. It’s part of what makes me so rad',
        time: '19:22',
        type: 'response',
        attachments: [],
      },
      {
        text: 'I just want to go back to hell, where everyone thinks I’m smart and funny.',
        time: '21:10',
        type: 'message',
        attachments: [],
      },
      {
        text: 'my generation gets traumatized for breakfast!',
        time: '21:10',
        type: 'message',
        attachments: [],
      },
      {
        text: '???',
        time: '19:21',
        type: 'response',
        attachments: [],
      },
      {
        text: 'That makes no sense!',
        time: '19:21',
        type: 'response',
        attachments: [],
      },
    ],
  },
  {
    id: 3,
    name: 'Flora Yao',
    thumb: '/img/profile/profile-2.webp',
    last: 'Yesterday 12:20',
    status: 'Online',
    unread: 0,
    messages: [
      {
        text: 'Did you hear the good news?',
        time: '12:20',
        type: 'response',
        attachments: [],
      },
      {
        text: "No, I haven't.",
        time: '12:20',
        type: 'message',
        attachments: [],
      },
      {
        text: 'I got a promotion at my job.',
        time: '12:20',
        type: 'response',
        attachments: [],
      },
      {
        text: 'Did you really?',
        time: '12:21',
        type: 'message',
        attachments: [],
      },
      {
        text: 'Seriously, I am so excited.',
        time: '12:21',
        type: 'response',
        attachments: [],
      },
      {
        text: 'Well, congratulations.',
        time: '12:21',
        type: 'message',
        attachments: [],
      },
      {
        text: "I'm so happy for you.",
        time: '12:22',
        type: 'message',
        attachments: [],
      },
      {
        text: 'You really deserved this.',
        time: '12:22',
        type: 'message',
        attachments: [],
      },
      {
        text: 'Thank you very much.',
        time: '12:22',
        type: 'response',
        attachments: [],
      },
      {
        text: 'Check these photos',
        time: '21:46',
        type: 'response',
        attachments: [],
      },
      {
        text: '',
        time: '21:46',
        type: 'response',
        attachments: ['/img/product/large/product-4.webp', '/img/product/large/product-5.webp'],
      },
    ],
  },
  {
    id: 4,
    name: 'Nemo Huang',
    thumb: '/img/profile/profile-4.webp',
    last: 'Yesterday 12:20',
    status: 'Online',
    unread: 0,
    messages: [],
  },
  {
    id: 5,
    name: 'Charlie Xiao',
    thumb: '/img/profile/profile-5.webp',
    last: 'Yesterday 12:20',
    status: 'Offline',
    unread: 0,
    messages: [
      {
        text: 'I really need to start eating healthier.',
        time: '21:45',
        type: 'response',
        attachments: [],
      },
      {
        text: 'What kind of food do you usually eat?',
        time: '21:45',
        type: 'response',
        attachments: [],
      },
      {
        text: 'I try my best to eat only fruits, vegetables, and chicken.',
        time: '21:45',
        type: 'message',
        attachments: [],
      },
      {
        text: "That's basically it.",
        time: '21:45',
        type: 'message',
        attachments: [],
      },
      {
        text: 'Actually, fruits and veggies are really good for you.',
        time: '21:46',
        type: 'message',
        attachments: [],
      },
      {
        text: 'Yes, I know, but what about the chicken?',
        time: '21:46',
        type: 'response',
        attachments: [],
      },
      {
        text: "I mainly eat baked chicken, because there's not a lot of fat.",
        time: '21:46',
        type: 'message',
        attachments: [],
      },
      {
        text: 'That does sound pretty good.',
        time: '21:46',
        type: 'response',
        attachments: [],
      },
    ],
  },
  {
    id: 6,
    name: 'Happy Zong',
    thumb: '/img/profile/profile-6.webp',
    last: 'Tuesday 12:20',
    status: 'Offline',
    unread: 0,
    messages: [
      {
        text: 'Hi!',
        time: '05:20',
        type: 'message',
        attachments: [],
      },
      {
        text: "This Friday, I'm throwing a party.",
        time: '05:21',
        type: 'message',
        attachments: [],
      },
      {
        text: "Oh really? I didn't know that.",
        time: '05:21',
        type: 'response',
        attachments: [],
      },
      {
        text: 'Are you serious?',
        time: '05:21',
        type: 'message',
        attachments: [],
      },
      {
        text: "I haven't heard anything about it.",
        time: '05:21',
        type: 'response',
        attachments: [],
      },
      {
        text: 'What time does it start?',
        time: '05:21',
        type: 'response',
        attachments: [],
      },
      {
        text: 'The party starts at 8.',
        time: '05:21',
        type: 'message',
        attachments: [],
      },
      {
        text: "Yeah, I think I'll go.",
        time: '05:21',
        type: 'response',
        attachments: [],
      },
      {
        text: 'See you there!',
        time: '05:21',
        type: 'response',
        attachments: [],
      },
    ],
  },
  {
    id: 7,
    name: 'Chloe Zhao',
    thumb: '/img/profile/profile-7.webp',
    last: 'Tuesday 10:20',
    status: 'Offline',
    unread: 0,
    messages: [],
  },
  {
    id: 8,
    name: 'Leia Zhao',
    thumb: '/img/profile/profile-8.webp',
    last: 'Monday 15:50',
    status: 'Offline',
    unread: 0,
    messages: [],
  },
  {
    id: 9,
    name: 'Emily Cai',
    thumb: '/img/profile/profile-9.webp',
    last: 'Monday 04:45',
    status: 'Offline',
    unread: 0,
    messages: [],
  },
  {
    id: 10,
    name: 'Simon Lin',
    thumb: '/img/profile/profile-10.webp',
    last: 'Monday 02:00',
    status: 'Offline',
    unread: 0,
    messages: [],
  },
];

api.onGet(`${SERVICE_URL}/apps/chat`).reply(200, chatData);
api.onPut(`${SERVICE_URL}/apps/chat/addText`).reply((config) => {
  const requestData = JSON.parse(config.data);
  const { id, text } = requestData;
  const date = new Date();
  const selectedChat = chatData.find((x) => x.id === id);
  selectedChat.messages.push({
    text,
    time: `${date.getHours()}:${date.getMinutes()}`,
    type: 'message',
    attachments: [],
  });
  // Add item
  chatData = [selectedChat, ...chatData.filter((x) => x.id !== id)];
  return [200, chatData];
});
api.onPut(`${SERVICE_URL}/apps/chat/addAttachments`).reply((config) => {
  const requestData = JSON.parse(config.data);
  const { id, attachments } = requestData;
  const date = new Date();
  const selectedChat = chatData.find((x) => x.id === id);
  selectedChat.messages.push({
    text: '',
    time: `${date.getHours()}:${date.getMinutes()}`,
    type: 'message',
    attachments,
  });
  // Add item
  chatData = [selectedChat, ...chatData.filter((x) => x.id !== id)];
  return [200, chatData];
});
api.onPut(`${SERVICE_URL}/apps/chat/read`).reply((config) => {
  const requestData = JSON.parse(config.data);
  const { id } = requestData;
  const selectedChat = { ...chatData.find((x) => x.id === id), unread: 0 };

  // Add item
  chatData = chatData.map((chat) => {
    if (chat.id === id) {
      return selectedChat;
    }
    return chat;
  });
  return [200, chatData];
});
