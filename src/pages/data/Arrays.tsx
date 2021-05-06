import { CardType, TabsType } from '../../types/types';

export const tabs: Array<TabsType> = [
  {
    id: 0,
    name: 'Own Projects',
  },
  {
    id: 1,
    name: 'With company',
  },
];

export const projectListCompany: Array<CardType> = [
  {
    id: 0,
    to: '/',
    name: 'Mail ru',
    mobile: 'tablet',
    info: {
      github: 'https://gitlab.com/search-tm-new-admgo/search-admgo-frontend',
      stack: 'Frontend: react + ts + mocks.',
      text: `System for parsing data from mail.ru projects.`,
    },
    img: [
      {
        content: (
          <img
            src="https://sun9-26.userapi.com/impg/tru5askU2ay2XEyozZlPJC49TpWVq8oafwlbBQ/k9yiV2XCyIM.jpg?size=577x712&quality=96&sign=3dfba3e64526b4078bec440e29abdbef&type=album"
            alt="home page"
            title="Table with websites"
          />
        ),
      },
      {
        content: (
          <img
            src="https://sun9-45.userapi.com/impg/e5DTLUjPYbggR6oblTpRXO67iqpa0Hn6KKkdqg/Clo_IAzQ2vQ.jpg?size=191x148&quality=96&sign=1e952c21e7412d0f4c099995e9f594d2&type=album"
            alt="parsers of site #40"
            title="parsers of site #40"
          />
        ),
      },
      {
        content: (
          <img
            src="https://sun9-46.userapi.com/impg/YmpttD1b7CKGAz3aoGl17INclhjBnETcXXZe7A/X4l_HheToQo.jpg?size=462x373&quality=96&sign=2396d0c996e62f14b508610b452acf20&type=album"
            alt="about site"
            title="about site"
          />
        ),
      },
      {
        content: (
          <img
            src="https://sun9-73.userapi.com/impg/x5JHy2veHGg5ZCxJEF9zrCfjXM6cXLUZibbhUg/URIJdj1_Whc.jpg?size=1915x810&quality=96&sign=cd15e591446b7c4c73349f2e9aa1f409&type=album"
            alt="repo"
            title="repo"
          />
        ),
      },
      {
        content: (
          <img
            src="https://sun9-35.userapi.com/impg/STfm_wl9Z-PsimaQppz63xauJOZywDeyMD2Dcg/qOci-gdcvIs.jpg?size=1027x724&quality=96&sign=a2265c9c7f78765197804d5e0be6f519&type=album"
            alt="commits"
            title="commits"
          />
        ),
      },
    ],
  },
  {
    id: 1,
    to: '/contacts',
    name: 'Greenlabs',
    mobile: 'mobile',
    info: {
      github: '-',
      stack: 'Frontend: Pure JS + React + Jquery + Webpack + Gulp + Grunt + Less + Sass.',
      text: `I did a lot of tasks (some task made myself, some task
            developed for juniors (with review)): Salavat, Amur, Petrovich,
            Netrika, Mariinka, MusicHall, Sib-drama, First-line, Digitory,
            Step, Avangard.`,
    },
    img: [
      {
        content: (
          <img
            src="https://sun9-20.userapi.com/impg/43UeKJWch4NMfGaQwx1VdVWRn9Dl7GwPdBM0Yg/sUnuvP9fdAM.jpg?size=466x752&quality=96&sign=ba233c24f35f99065b8a8346446b6346&type=album"
            alt="greenlabs"
          />
        ),
      },
    ],
  },
  {
    id: 2,
    to: '/gen',
    name: 'Gen shop',
    mobile: 'desktop',
    info: {
      github: '-',
      stack: 'Front-end: Pure JS + Gulp + SASS. Back-end: php (CodeIgniter).',
      text: `I prepared environment and repository for comfortable development;
            refactored frontend; wrote a lot of manual, for exmaple:
            how launching the project (a lot of legacy php code,
            without any task runner built). I have developed analog BoxBerry
            with yandex map API; created and reviewed tasks for juniors.`,
    },
    img: [
      {
        content: (
          <img
            src="https://sun9-48.userapi.com/impg/JJiFSUq1Ldfa5R0OO5nZJchYIMMc7tWhcdLe-w/kqe7qGbHcLc.jpg?size=1911x931&quality=96&sign=63f5e12370345e9cbba21d7ee71225e1&type=album"
            alt="home page"
          />
        ),
      },
      {
        content: (
          <img
            src="https://sun9-20.userapi.com/impg/1WHdZ-JXkIjJ8J3Z59U56pDKyHUo76K5djMBxw/Fg2xZiuGMRc.jpg?size=1909x933&quality=96&sign=a4fc155c6b4c9103029fcb412cfea22a&type=album"
            alt="map"
          />
        ),
      },
    ],
  },
  {
    id: 3,
    to: '/a-ride',
    name: 'A-RIDE (online-shop)',
    mobile: 'desktop',
    info: {
      github: '-',
      stack: 'Frontend: js + css. Backend: php.',
      text: 'Refactoring, tasks.',
    },
    img: [
      {
        content: (
          <img
            src="https://a-ride.ru/upload/images/xlogo_new_year.png.pagespeed.ic.M9pZqOq6zo.webp"
            alt="a-ride"
          />
        ),
      },
    ],
  },
];

export const projectList: Array<CardType> = [
  {
    id: 0,
    to: '/gratitude',
    name: 'Euro2020 Dashboard',
    mobile: 'desktop',
    info: {
      github: 'https://github.com/evelas/euro2021',
      stack: 'Frontend: REACT + REDUX + TS + WEBPACK. Backend: php.',
      text: 'A data visualization tool that allow all "volspb" employees to understand the analytics that matter to their volunteer business.',
    },
    img: [
      {
        content: (
          <img
            src="https://sun9-59.userapi.com/impf/Zn2c2tyXwCcydWvl6xkAA21ZWMqe5_NmXm56UQ/rcptZsRr9nA.jpg?size=1259x631&quality=96&proxy=1&sign=5c4794b6e17b1d08bf7c954a722f25b4&type=album"
            alt="search"
          />
        ),
      },
      {
        content: (
          <img
            src="https://sun9-31.userapi.com/impg/PIoMIoX2-d-ODMunuWP3yEhUTMiBT8C5YxG3tg/sYopnExPHvE.jpg?size=1905x870&quality=96&sign=78e2c248df39d3cc769357a8f5cc42ea&type=album"
            alt="graphs"
          />
        ),
      },
      {
        content: (
          <img
            src="https://sun9-67.userapi.com/impf/Qkbqi-eWgYAN3U5M2YFUSTgQmTAHuMi-G-_3BA/v8LmAIxJjJM.jpg?size=1646x836&quality=96&proxy=1&sign=434c8c7c5e216e8d9033b7c90f6613db&type=album"
            alt="profile"
          />
        ),
      },
      {
        content: (
          <img
            src="https://sun9-24.userapi.com/impf/Cm3PclZQmfzDISMRGS-PI3wvJ3oQ4gRSsKYRtA/b22XAE_gGAM.jpg?size=1904x880&quality=96&proxy=1&sign=4b02b3b8701ad4c6c03cb6d6a96da976&type=album"
            alt="calendar"
          />
        ),
      },
    ],
  },
  {
    id: 1,
    to: '/excel',
    name: 'Pure JS Excel',
    mobile: 'tablet',
    info: {
      github: '',
      stack: 'Frontend: Pure JS + Webpack + SCSS.',
      text: 'Improved my skills on pure JS in developing Excel',
    },
    img: [
      {
        content: (
          <img
            src="https://sun9-67.userapi.com/impg/VQhjym4fpM9EdjHyf4NdV09lbpzr-UXHbrUtBA/RUuM9S7yd8I.jpg?size=1541x592&quality=96&sign=732d3dbabe547504ed0e8b7671e61419&type=album"
            alt="dashboard"
          />
        ),
      },
      {
        content: (
          <img
            src="https://sun9-16.userapi.com/impg/PE-gVKnH4eZqBVRDs87NCN0BKpZzV9OCpOoMBw/XI3yeXR-e3k.jpg?size=1330x564&quality=96&sign=5e5c41e2c1b977930f7d905321fc6e66&type=album"
            alt="excel"
          />
        ),
      },
    ],
  },
  {
    id: 2,
    to: '/contacts',
    name: 'MobileApp Volspb',
    mobile: 'mobile',
    info: {
      github: 'https://github.com/evelas/volspbapp',
      stack: 'Frontend: ionic (angular); Backend: php.',
      text: `For volunteers available: news with volunteers work, schedule,
            map with events, messages from curators. For curators a few more:
            scanning qr-code from badge (daily check in), daily report.`,
    },
    img: [
      {
        content: (
          <img
            src="https://sun9-43.userapi.com/impf/iF3z5DTLh3dRzyQmruz4kHmcUszwjE15nUiBjQ/IQ2rqNsgemo.jpg?size=1039x2160&quality=96&proxy=1&sign=93e5ac5b466478f29fc35d87729e7163&type=album"
            alt="Download"
          />
        ),
      },
      {
        content: (
          <img
            src="https://sun9-73.userapi.com/impf/s34gsEkKzzjV-7ZUGlpSdVVBLTFoHIhg1GzH5Q/a6wjiwHVvEs.jpg?size=1039x2160&quality=96&proxy=1&sign=572a85eb7197c714e7dc38412c887a9a&type=album"
            alt="start screen"
          />
        ),
      },
      {
        content: (
          <img
            src="https://sun9-71.userapi.com/impf/SzVdTWQtyF6vzzNhWDFFMo6YpoB0Sxw_TV_afg/gLyqWck80LU.jpg?size=1039x2160&quality=96&proxy=1&sign=457be58bb52a33af0909804714c9190c&type=album"
            alt="start screen"
          />
        ),
      },
      {
        content: (
          <img
            src="https://sun9-70.userapi.com/impf/N5qjJTTLMiilWUF1p-1PdY2QWBrA4Q9XDbiuZg/_Qv9422htj0.jpg?size=1039x2160&quality=96&proxy=1&sign=b3f3b9b84347759718d03739cba980a5&type=album"
            alt="start screen"
          />
        ),
      },
      {
        content: (
          <img
            src="https://sun9-19.userapi.com/impf/DfHMVA1PlaxR2Nqju-Ud6SQnX53ypSR1Tkr8uA/ujEye8WuiEA.jpg?size=1039x2160&quality=96&proxy=1&sign=c35a60807e598c35849a723966703b19&type=album"
            alt="news"
          />
        ),
      },
      {
        content: (
          <img
            src="https://sun9-46.userapi.com/impf/mlAL9peXhj2hiOm-ZdAkNB2wXYUcKup6PyD4Lg/EOEz3WFRccs.jpg?size=769x1600&quality=96&proxy=1&sign=dae9a134de3bffb75237395717b4cea3&type=album"
            alt="schedule"
          />
        ),
      },
      {
        content: (
          <img
            src="https://sun9-15.userapi.com/impf/43c2oGPc7HNeo1o3_0XNK9L2QABY6hWX8pVLiQ/37TeWN3sk6I.jpg?size=769x1600&quality=96&proxy=1&sign=9f04bfc56493a8451ed3fde4a54b58c7&type=album"
            alt="login"
          />
        ),
      },
      {
        content: (
          <img
            src="https://sun9-29.userapi.com/impf/_dXVd8D48drcL-CrPPPs5g8tGqciOSiV7SvWFw/eQI1YCTs5GU.jpg?size=1039x2160&quality=96&proxy=1&sign=69939f1c8a47a7061b2e4a1b1b23c313&type=album"
            alt="profile"
          />
        ),
      },
      {
        content: (
          <img
            src="https://sun9-36.userapi.com/impf/Um4dlKfCD7JJzAiClj0lgGGOZ4IYs8S95QmG7Q/0vyvCmV8Ii4.jpg?size=1039x2160&quality=96&proxy=1&sign=5198f43d13fc7141a3f9e83ad84ec1b3&type=album"
            alt="notification"
          />
        ),
      },

      {
        content: (
          <img
            src="https://sun9-69.userapi.com/impf/hrLoFLwF9bpzwIe3pcxCfeKz2bkQRtwjbVzIGA/82A4KoCaJEg.jpg?size=1039x2160&quality=96&proxy=1&sign=f1576f11e2795df644c1e029e1aa0ee9&type=album"
            alt="maps"
          />
        ),
      },
    ],
  },
  {
    id: 3,
    to: '/',
    name: 'Добро Форум',
    mobile: 'desktop',
    info: {
      github: 'https://github.com/evelas/dobroforum',
      stack: 'Frontend: REACT + REDUX + TS + SCSS. Backend: php.',
      text: `Online forum with qr-quiz, system of voting in the 2nd annual award
            of Kind People in Saint-Petersburg, personal account
            (registration, login, logout, remember password, remember me),
            admin account where you can change users data.`,
    },
    img: [
      {
        content: (
          <img
            src="https://sun9-14.userapi.com/impf/kSIV0r4bSAuZon9AJ96-Cz8o4nhZIAdLpvFgyQ/OOyt8JEONtQ.jpg?size=1636x915&quality=96&proxy=1&sign=3566deeca113515607d66caf82cadf15&type=album"
            alt="home page"
          />
        ),
      },
      {
        content: (
          <img
            src="https://sun9-1.userapi.com/impf/OcV8gHyo7EkZmVZ_ATxgbk4E4vO_J7nX66HiKg/BIKykh8fNQw.jpg?size=1659x846&quality=96&proxy=1&sign=1875a197e107b5d374378aabf6b7a52b&type=album"
            alt="login"
          />
        ),
      },
      {
        content: (
          <img
            src="https://sun9-58.userapi.com/impf/fPe-_fKKGnc4JYD0xy7M1hVTA5prC8O9mWz5gw/gOUo4Dh_2gQ.jpg?size=1662x877&quality=96&proxy=1&sign=fc489e0e367ba90ed09e5262535936e1&type=album"
            alt="VK API"
          />
        ),
      },
      {
        content: (
          <img
            src="https://sun9-15.userapi.com/impf/50bo5g4kgtpSf4LeNOcVR2tqunxI56psYSxNFQ/onys_6iVZkI.jpg?size=913x540&quality=96&proxy=1&sign=3e7606537ced42c3051fe67b72c0742f&type=album"
            alt="Vote"
          />
        ),
      },
    ],
  },
  
  {
    id: 4,
    to: '/gratitude',
    name: 'Euro 2020',
    mobile: 'mobile',
    info: {
      github: '-',
      stack: 'Frontend: PUG + SCSS + JS. Backend: php.',
      text: 'A system for registration volunteers for EURO 2020 where users can be received all information about study to be a part of volunteers EURO 2020',
    },
    img: [
      {
        content: (
          <img
            src="https://sun9-3.userapi.com/impf/7dcz5-yQuY_3fZzXREZrt1CAf5LMgsge_hY8Lw/5a6Keo1LIrA.jpg?size=518x899&quality=96&proxy=1&sign=8917110948392d24821b00a37f21db53&type=album"
            alt="home"
          />
        ),
      },
      {
        content: (
          <img
            src="https://sun9-39.userapi.com/impf/CwYOYwCvAIEKvu7fgHEtyeg0M4-0_UgNlDYrOQ/ToQPtLbpGIw.jpg?size=1039x2160&quality=96&proxy=1&sign=8359643f4b9bc333da50d0ae8b6d5ad8&type=album"
            alt="regestration"
          />
        ),
      },

      {
        content: (
          <img
            src="https://sun9-48.userapi.com/impf/T0xUBML79E5Vgk3ZVeCJ0QyS5kqnjeazva8Rxg/EvrvAEWHiQ4.jpg?size=751x925&quality=96&proxy=1&sign=4552aa7ea25649a060af209b2a21f122&type=album"
            alt="profle"
          />
        ),
      },
      {
        content: (
          <img
            src="https://sun9-34.userapi.com/impf/BdmQWxuvqQcgzHGvMSDwhyWeYZaMfR3w0Exg7g/A1gMLjxk0kg.jpg?size=514x930&quality=96&proxy=1&sign=e7646b93468a3e65daff03b31f515f9e&type=album"
            alt="about"
          />
        ),
      },
    ],
  },
  {
    id: 5,
    to: '/gratitude',
    name: 'StroiSektor',
    mobile: 'tablet',
    info: {
      github: 'https://github.com/evelas/stroisektor-shop',
      stack: 'Frontend: React + Redux + SCSS. Backend: php.',
      text: 'Online-shop for construction company',
    },
    img: [
      {
        content: (
          <img
            src="https://sun9-54.userapi.com/impf/oKM-8dGZCcfn0tdZt_4bYdQfAuxHuwOj7n5_Eg/fD8OpPsp_G8.jpg?size=1281x840&quality=96&proxy=1&sign=b35542e7c0b354e79897cd4f71f3e647&type=album"
            alt="home"
          />
        ),
      },
      {
        content: (
          <img
            src="https://sun9-69.userapi.com/impf/z2KGcHMW5hZ3wgj-8eHZszk8S7ozTduIMV4TNQ/D2j5_Ivk-Og.jpg?size=859x552&quality=96&proxy=1&sign=78e0d521159e76a8f5e6988ce4570181&type=album"
            alt="search"
          />
        ),
      },
      {
        content: (
          <img
            src="https://sun9-14.userapi.com/impf/Ov3weVGgtyFgcfAsHIRXOMnabI9G0qNJ6QQPxQ/tRrukAtIuqc.jpg?size=1147x610&quality=96&proxy=1&sign=d5445ae94081b277a2c4b7d42b3e7d45&type=album"
            alt="cart"
          />
        ),
      },
    ],
  },
  {
    id: 6,
    to: '/gratitude',
    name: 'Confederations & World Cup 17-18',
    mobile: 'desktop',
    info: {
      github: '-',
      stack: 'Fronend: Jquery + CSS. Backend: php.',
      text: '',
    },
    img: [
      {
        content: (
          <img
            src="https://sun9-12.userapi.com/impf/odRnxU1EDc2Q-vG1SWQGpOSOKC25crgBzrhfcQ/oxZWw2VXQmA.jpg?size=1366x678&quality=96&proxy=1&sign=841e70795ee3ffe2123cd8b78a49ebd3&type=album"
            alt="profile"
          />
        ),
      },
      {
        content: (
          <img
            src="https://sun9-66.userapi.com/impf/fXiTbWNpLDVlR-aY6nH3RjVtn6vTKLO5PeDcng/inhwZ9wwVoY.jpg?size=1920x1080&quality=96&proxy=1&sign=3b827931313e01bda6c606903c7f33dd&type=album"
            alt="schedule"
          />
        ),
      },
      {
        content: (
          <img
            src="https://sun9-40.userapi.com/impf/lelxS7f8y-_Y-QGIMpT-ufqRkXKDyJZhmegw_w/16YIzAURn9o.jpg?size=1366x709&quality=96&proxy=1&sign=4432d2216d44e7af4f187982d130ca17&type=album"
            alt="messages"
          />
        ),
      },
      {
        content: (
          <img
            src="https://sun9-58.userapi.com/impf/B3uvNa2_7zUpF7zC2yU2NuJYIi3hLa5VgWUUqg/ImeMGP4CofA.jpg?size=1366x559&quality=96&proxy=1&sign=d98c6243af56334497ddfa2863f7b87f&type=album"
            alt="game"
          />
        ),
      },
    ],
  },
  {
    id: 6,
    to: '/gratitude',
    name: 'Shadow Museum 2018',
    mobile: 'desktop',
    info: {
      github: '-',
      stack: 'Fronend: JS + CSS.',
      text: '',
    },
    img: [
      {
        content: (
          <img
            src="https://sun9-69.userapi.com/impg/pGC4fdp5_x4EiBqhJ7-EBv4Nw1beeOlg7PHzLQ/SqP-cPwOUYI.jpg?size=1904x857&quality=96&sign=c1b08eb7bc9af16dbcd763462a7720e5&type=album"
            alt="home page"
          />
        ),
      },
    ],
  },
  
];
