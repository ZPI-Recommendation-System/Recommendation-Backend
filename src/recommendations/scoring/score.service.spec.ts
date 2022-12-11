import { ScoreService } from "./score.service";

describe('Score Service Test', () => {
  let scoreService: ScoreService;
  beforeAll(async () => {
    scoreService = new ScoreService();
  });

  it('Score Model', () => {
    const form = {
      minDiscSize: 1000,
      ramInUnits: 2,
      usageType: 'Aplikacje biurowe i internet',
      maxPricePLN: 10000,
      dataPreferences: {
        diskDrive: false,
        sdCardReader: false,
      },
      preferredScreenSizes: ['15', '16', '>17'],
      batteryRunTime: 10,
      internetPreferences: {
        lanPort: false,
        simCard: false,
      },
      screenPreferences: {
        otherVideoConnectors: true,
        touchScreen: false,
        HDMI: false,
      },
    };
    const score = scoreService.scoreModel(form, {
      id: '000012b3-bdf1-4374-b5e2-f20a15310068',
      name: 'Laptop Lenovo IdeaPad Gaming 3 15ACH6 15,6 " AMD Ryzen 7 32 GB / 2048 GB czarny',
      model: 'IdeaPad Gaming 3 15ACH6',
      type: 'standardowy',
      producentCode: '82K200P0W',
      batterySizeWH: 45,
      batterySizeMAH: 3910,
      batteryTime: null,
      color: 'czarny',
      width: 36,
      length: 2.8,
      depth: 25.2,
      weight: 2.25,
      ramAmount: 32,
      ramFrequency: 3200,
      ramNumberOfSlots: 2,
      ramNumberOfFreeSlots: 0,
      ramType: 'DDR4',
      ramMaxAmount: 32,
      driveStorage: 2048,
      driveType: 'SSD',
      hddSpeed: null,
      price: 5699,
      priceSource: 'allegro',
      processor: {
        id: 20333,
        model: 'AMD Ryzen 7 5800H',
        series: 'AMD Ryzen 7',
        cores: 8,
        frequency: 3.2,
        benchmark: {
          id: 1359,
          type: 'CPU',
          brand: 'AMD',
          model: 'Ryzen 7 5800H',
          benchmark: 75.1,
          samples: 20860,
          url: 'https://cpu.userbenchmark.com/SpeedTest/1442974/AMD-Ryzen-7-5800H-with-Radeon-Graphics',
        },
      },
      screen: {
        id: 25360,
        diagonalScreenInches: 15.6,
        resolution: '1920 x 1080',
        screenFinish: 'matowa',
        screenType: 'IPS',
        refreshRate: 120,
        touchScreen: false,
      },
      graphics: {
        id: 20333,
        graphicsCardModel: 'NVIDIA GeForce RTX 3050Ti',
        graphicsCardType: 'Grafika dedykowana',
        graphicsCardVRam: '4 GB',
        benchmark: {
          id: 1537,
          type: 'GPU',
          brand: 'Nvidia',
          model: 'RTX 3050-Ti (Laptop)',
          benchmark: 58.5,
          samples: 14683,
          url: 'https://gpu.userbenchmark.com/SpeedTest/1559532/NVIDIA-GeForce-RTX-3050-Ti-Laptop-GPU',
        },
      },
      communications: [
        {
          communicationName: 'Bluetooth',
        },
        {
          communicationName: 'LAN 10/100/1000 Mbps',
        },
        {
          communicationName: 'Wi-Fi',
        },
      ],
      multimedia: [],
      drives: [
        {
          driveType: 'brak',
        },
      ],
      connections: [
        {
          connectionName: 'minijack 3,5 mm (audio)',
        },
        {
          connectionName: 'HDMI',
        },
        {
          connectionName: 'USB 3.1 typ C',
        },
        {
          connectionName: 'USB 3.1 typ A',
        },
        {
          connectionName: 'RJ-45',
        },
      ],
      controls: [
        {
          controlName: 'klawiatura numeryczna',
        },
        {
          controlName: 'klawiatura',
        },
        {
          controlName: 'klawiatura podświetlana',
        },
        {
          controlName: 'touchpad',
        },
      ],
      images: [
        {
          id: 178091,
          url: 'https://a.allegroimg.com/original/110fee/0772036f451589bd60d05e34ec2e',
        },
        {
          id: 178092,
          url: 'https://a.allegroimg.com/original/111b32/12fb18694f509606496e73c92e7d',
        },
        {
          id: 178093,
          url: 'https://a.allegroimg.com/original/11d5d8/aac8c5d545fa861a507708a8f7f2',
        },
        {
          id: 178094,
          url: 'https://a.allegroimg.com/original/11d9be/1f46e7354bcbbfcf7e79d3187329',
        },
        {
          id: 178095,
          url: 'https://a.allegroimg.com/original/114d46/6fda25a14b70848fc3e18d1387f9',
        },
        {
          id: 178096,
          url: 'https://a.allegroimg.com/original/11750c/ce758e2a46019d67cbc30bc6143a',
        },
        {
          id: 178097,
          url: 'https://a.allegroimg.com/original/11cc69/63bea37e41f8afd2695ea75593e4',
        },
        {
          id: 178098,
          url: 'https://a.allegroimg.com/original/11f2aa/f02b5da24b18ad854ead2a0c3d5d',
        },
        {
          id: 178099,
          url: 'https://3.allegroimg.com/original/032ec0/b2f4bbb242c8ac4c9ce82319d793',
        },
      ],
      estimatedScore: 0,
      estimatedPopularity: 0,
    });
    expect(score).toBeDefined();
    expect(score.score).toBeGreaterThan(0);
  });
});
