type Service = {
  title: string;
  description: string;
};

type Content = {
  title: string;
  introduction: string;
  services: Service[];
};

const hungarian: Content = {
  title: 'VKV architectural starter kit',
  introduction:
    'hello mi egy építész szolgáltatást nyújtó vállakozás vagyunk, segítünk építészeti tanácsadásban, felmérésben, koncepció alkotásban stb...',
  services: [
    {
      title: 'tananácsadás',
      description: 'service description',
    },
    {
      title: 'felmérés',
      description: 'service description',
    },
    {
      title: 'koncepció',
      description: 'service description',
    },
  ],
};

export default hungarian
